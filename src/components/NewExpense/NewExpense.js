//Niv Vardi 209083278 | Orad Dostra 208939736
import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);
	const startEditingHandler = () => {
		setIsEditing(true);
	};
	const stopEditingHandler = () => {
		setIsEditing(false);
	};
	const onSaveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
        setIsEditing(false);
	};
	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditingHandler}>Add new expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					stopEditing={stopEditingHandler}
					onSaveExpenseData={onSaveExpenseDataHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
