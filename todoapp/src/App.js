import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const [tasks, setTasks] = useState([]);

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
