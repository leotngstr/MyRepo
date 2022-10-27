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

    addTask({ text });

    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <input type="submit" value="Add Task"></input>
    </form>
  );
};

export default TaskForm;
