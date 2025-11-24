import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    addTask({
      text: task.trim(),
      priority,
      category,
      completed: false,
    });

    setTask("");
    setPriority("Medium");
    setCategory("General");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </div>

      <div className="selectors">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>General</option>
          <option>Work</option>
          <option>Personal</option>
        </select>
      </div>
    </form>
  );
}
