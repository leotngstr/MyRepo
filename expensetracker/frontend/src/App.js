import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/all_expenses")
      .then((res) => setExpenses(res.data));
  });

  const addExpense = (type, name, date, amount) => {
    axios
      .post("http://localhost:8000/api/add_expense", {
        id: "",
        type: type,
        name: name,
        date: date,
        amount: amount,
      })
      .then((res) => console.log(res));
  };

  const deleteExpense = (id) => {
    axios
      .delete(`http://localhost:8000/api/delete_expense/${id}`)
      .then((res) => console.log(res));
  };

  return (
    <div>
      <Header />
      <Form addExpense={addExpense} />
      {expenses.length > 0 ? (
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      ) : (
        <div class="container alert alert-primary d-flex align-items-center w-50" role="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi flex-shrink-0 me-2"
            viewBox="0 0 16 16"
            role="img"
            aria-label="Warning:"
          >
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
          <div className="fs-5">No Expenses To Show</div>
        </div>
      )}
    </div>
  );
};

export default App;
