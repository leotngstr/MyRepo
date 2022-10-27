import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
