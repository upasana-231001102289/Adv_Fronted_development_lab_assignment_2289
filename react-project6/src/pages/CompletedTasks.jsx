import { Link } from "react-router-dom";

function CompletedTasks({ tasks, setTasks }) {

  const completedTasks = tasks.filter(
    task => task.status === "Closed"
  );

  const deleteTask = (id) => {

    setTasks(
      tasks.filter(task => task.id !== id)
    );

  };

  return (
    <main className="page">

      <h1>Completed Tasks</h1>

      <p className="subtitle">
        Tasks that have been completed
      </p>

      {completedTasks.length === 0 ? (

        <p className="empty">
          No completed tasks yet.
        </p>

      ) : (

        <div className="task-list">

          {completedTasks.map(task => (

            <div
              className="task-card completed"
              key={task.id}
            >

              <div>

                <h2>{task.header}</h2>

                <p>{task.description}</p>

                <div className="task-meta">

                  <span>
                    Category: {task.category}
                  </span>

                  <span>
                    Priority: {task.priority}
                  </span>

                  <span>
                    Status: Closed
                  </span>

                </div>

              </div>

              <div className="task-actions">

                <Link
                  to={`/tasks/${task.id}`}
                >
                  View
                </Link>

                <button
                  className="delete"
                  onClick={() =>
                    deleteTask(task.id)
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </main>
  );
}

export default CompletedTasks;