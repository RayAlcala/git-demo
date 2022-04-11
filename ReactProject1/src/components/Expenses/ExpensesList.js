import React from 'react';

import ExpenseItem from './ExpenseItem';
// import ExpenseItem since you are using it as a tag here
import './ExpensesList.css';

const ExpensesList = props => {

  if(props.items.length ===0) {
      return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem 
            key={expense.id}
            // always add a key when mapping out a list of items so that 
            // React is aware not just how long the array is but also 
            // which items should be placed which updates list more efficiently
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}
      />
    ))}
    </ul>
  );
};

export default ExpensesList;