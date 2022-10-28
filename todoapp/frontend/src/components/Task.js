import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, deleteTask }) => {
  return (
    <div>
      <h3>
        {task.text}{" "}
        <FontAwesomeIcon
          icon={faXmark}
          style={{ cursor: "pointer" }}
          onClick={() => deleteTask(task.text)}
        />
      </h3>
    </div>
  );
};

export default Task;
