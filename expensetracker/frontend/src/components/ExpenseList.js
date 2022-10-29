import React from "react";
import Expense from "./Expense";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="container">
      <table className="table table-dark table-striped table-bordered table-hover text-center">
        <thead>
          <tr>
            <th className="fs-5 text-warning" scope="col">
              Type
            </th>
            <th className="fs-5 text-warning" scope="col">
              Name
            </th>
            <th className="fs-5 text-warning" scope="col">
              Date
            </th>
            <th className="fs-5 text-warning" scope="col">
              Amount
            </th>
            <th className="fs-5 text-warning" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <Expense expense={expense} deleteExpense={deleteExpense} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
