import React from "react";

const Expense = ({ expense, deleteExpense }) => {
  return (
    <tr>
      <td>{expense.type}</td>
      <td>{expense.name}</td>
      <td>{expense.date}</td>
      <td>{expense.amount}</td>
      <td>
        <button
          type="button"
          class="btn-close btn-close-white"
          aria-label="Close"
          onClick={() => deleteExpense(expense.id)}
        ></button>
      </td>
    </tr>
  );
};

export default Expense;
