import { Link } from "react-router-dom";

function TaskCard({
  task,
  onComplete,
  onDelete
}) {
  return (
    <div className="task-card">

      <div className="task-content">

        <h2>{task.header}</h2>

        <p>{task.description}</p>

        <div className="task-meta">

          <span>
            Priority: {task.priority}
          </span>

          <span>
            Category: {task.category}
          </span>

          <span>
            Due: {task.dueDate}
          </span>

          <span>
            Status: {task.status}
          </span>

        </div>

      </div>

      <div className="task-actions">

        {/* View Details */}
        <Link to={`/tasks/${task.id}`}>
          View
        </Link>

        {/* Complete Task */}
        {task.status !== "Closed" && (
          <button
            onClick={() => onComplete(task.id)}
          >
            Complete
          </button>
        )}

        {/* Delete Task */}
        <button
          className="delete"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;