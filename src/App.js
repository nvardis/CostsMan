//Niv Vardi 209083278 | Orad Dostra 208939736
import Expenses from "./components/Expenses/Expenses.js";
import React,{useEffect, useMemo ,useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense.js";
import Expense from "./expense.js";
import LocalStorage from "./LocalStorage.js";
import logo from './logoapp.png';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const localStorage = useMemo(() => new LocalStorage(), []);
 
  useEffect(()=>{   
    const onMount = async ()=>{
      let exp = await localStorage.getItem('expenses');
      if(!exp){
        return;
      }
      setExpenses(JSON.parse(exp));
    };
    onMount();
  },[localStorage])


  const addExpenseHandler = expense =>{
    const newExp = new Expense(expense.date,expense.id,expense.title,expense.amount,expense.description, expense.category);
    setExpenses(prevExpenses => {
      return [newExp, ...prevExpenses];
    });
  };

  useEffect(() => {
  localStorage.setItem('expenses', JSON.stringify(expenses));
}, [expenses, localStorage]);

  return (
    <div>
      <img src={logo} alt='logo-app'/>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expenses={expenses}/> 
    </div>
  );
}

export default App;
