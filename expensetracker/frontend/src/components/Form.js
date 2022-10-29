import React, { useState } from "react";

const Form = ({ addExpense }) => {
  const [type, setType] = useState();
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [amount, setAmount] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!type || !name || !date || !amount || amount <= 0) {
      alert("Bad Request");
      return;
    }

    addExpense(type, name, date, amount);

    setType("");
    setName("");
    setDate("");
    setAmount("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row justify-content-center my-3">
        <div className="col-1">
          <label className="form-label fs-5 fw-bold text-secondary">
            Type:{" "}
          </label>
        </div>
        <div className="col-3">
          <select
            className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option selected disabled></option>
            <option value="Credit Cards">Credit Cards</option>
            <option value="Dedit Cards">Dedit Cards</option>
            <option value="Cash">Cash</option>
            <option value="Cryptocurrency">Cryptocurrency</option>
            <option value="Electronic Funds Transfers">
              Electronic Funds Transfers
            </option>
            <option value="Checks">Checks</option>
            <option value="Mobile Phones">Mobile Phones</option>
          </select>
        </div>
        <div className="col-1">
          <label className="form-label fs-5 fw-bold text-secondary">
            Name:{" "}
          </label>
        </div>
        <div className="col-3">
          <input
            className="form-control"
            type="text"
            placeholder="Where was the expense made?"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="row justify-content-center my-3">
        <div className="col-1">
          <label className="form-label fs-5 fw-bold text-secondary">
            Date:{" "}
          </label>
        </div>
        <div className="col-3">
          <input
            className="form-control"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>
        <div className="col-1">
          <label className="form-label fs-5 fw-bold text-secondary">
            Amount:{" "}
          </label>
        </div>
        <div className="col-3">
          <input
            className="form-control"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="text-center my-3">
        <button className="text-white bg-success" type="submit" value="Submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default Form;
