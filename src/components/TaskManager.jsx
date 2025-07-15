import { useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";
import Button from "./Button";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => task.id === id
      ? { ...task, completed: !task.completed }
      : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filtered = tasks.filter((task) =>
    filter === "active"
      ? !task.completed
      : filter === "completed"
      ? task.completed
      : true
  );

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded p-6">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task..."
          className="flex-grow px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
        <Button variant="primary" onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2 mb-4">
        <Button variant={filter === "all" ? "primary" : "secondary"} size="sm" onClick={() => setFilter("all")}>All</Button>
        <Button variant={filter === "active" ? "primary" : "secondary"} size="sm" onClick={() => setFilter("active")}>Active</Button>
        <Button variant={filter === "completed" ? "primary" : "secondary"} size="sm" onClick={() => setFilter("completed")}>Completed</Button>
      </div>

      <ul className="space-y-2">
        {filtered.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400 text-center">No tasks</li>
        ) : (
          filtered.map((task) => (
            <li key={task.id} className="flex justify-between items-center border p-2 rounded dark:border-gray-700">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span className={task.completed ? "line-through text-gray-500 dark:text-gray-400" : ""}>{task.text}</span>
              </div>
              <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>Delete</Button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
