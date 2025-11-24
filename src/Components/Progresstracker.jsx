export default function ProgressTracker({ tasks }) {
  const completed = tasks.filter((t) => t.completed).length;
  const total = tasks.length;
  const percent = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div className="progress-section">
      <p>
        {completed} of {total} tasks completed
      </p>

      <div className="progress-bg">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
