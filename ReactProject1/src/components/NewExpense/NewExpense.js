import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    // isEditing is a startEditingHandler, setIsEditing is a function

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
        // closes form when submitted
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };
    
    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    
    return (
        <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {/* we do not execute the function here, we simply point to it 
        hide form when not editing */}
        {isEditing && (
        <ExpenseForm 
            onSaveExpenseData={saveExpenseDataHandler} 
            onCancel={stopEditingHandler}
            //  show form when editing
            // close form when cancel button is clicked
            />
        )}
    </div>
    );
};

export default NewExpense;