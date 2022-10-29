import React from "react";
import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    addTask(text);

    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row mt-5">
        <div class="col-4 offset-md-3">
          <input
            class="form-control"
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        <div className="col-4">
          <input class="btn btn-success" type="submit" value="Add Task"></input>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
