//Niv Vardi 209083278 | Orad Dostra 208939736
import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
const ExpensesList = (props) => {
	

	if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses!</h2>;
    }

    return <ul className="expenses-list">
    {props.items.map((expense) => {
        return <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            description={expense.description}
            category={expense.category}
        />
    }
        
    )}
    </ul>
};
export default ExpensesList;
