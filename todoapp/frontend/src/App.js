import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  // Read all tasks
  useEffect(() => {
    axios.get("http://localhost:8000/api/all_tasks").then((res) => {
      setTasks(res.data);
    });
  });

  // Add task
  const addTask = (text) => {
    axios
      .post("http://localhost:8000/api/add_task", { 'text': text })
      .then((res) => console.log(res));
  };

  const deleteTask = (text) => {
    axios
      .delete(`http://localhost:8000/api/delete_task/${text}`)
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
