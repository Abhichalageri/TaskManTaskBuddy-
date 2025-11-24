export default function TaskList({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    const updated = {
      ...tasks[index],
      completed: !tasks[index].completed,
    };
    updateTask(updated, index);
  };

  return (
    <ul className="task-list">
      {tasks.map((task, i) => (
        <li key={i} className={task.completed ? "completed" : ""}>
          <div className="info">
            <span>{task.text}</span>
            <small>
              {task.priority} • {task.category}
            </small>
          </div>

          <div className="actions">
            <button className="complete-btn" onClick={() => toggleComplete(i)}>
              {task.completed ? "Undo" : "Done"}
            </button>
            <button className="delete-btn" onClick={() => deleteTask(i)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
