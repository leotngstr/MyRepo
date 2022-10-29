import React from "react";

const Task = ({ task, deleteTask }) => {
  return (
    <div className="row mt-4">
      <input
        value={task.text}
        type="text"
        className="col-4 border border-1 rounded-pill bg-dark bg-gradient text-warning shadow-lg offset-md-3 py-1 readonly input example fs-5"
      ></input>
      <div className="col-1 w-auto border border-1 rounded-pill bg-danger text-light">
        <button type="button" class="btn" onClick={() => deleteTask(task.text)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
