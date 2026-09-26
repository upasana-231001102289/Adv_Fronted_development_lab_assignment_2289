import { useState } from "react";
import { Link } from "react-router-dom";

function Tasks({ tasks, setTasks }) {

  const [filter, setFilter] = useState("All");

  const filteredTasks =
    filter === "All"
      ? tasks.filter(task => task.status !== "Closed")
      : tasks.filter(
          task =>
            task.status === filter &&
            task.status !== "Closed"
        );

  const completeTask = (id) => {

    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, status: "Closed" }
          : task
      )
    );

  };

  const deleteTask = (id) => {

    if (window.confirm("Delete this task?")) {

      setTasks(
        tasks.filter(task => task.id !== id)
      );

    }
  };

  return (
    <main className="page">

      <div className="page-header">

        <div>
          <h1>Tasks</h1>
          <p>Manage your active tasks</p>
        </div>

        <Link
          to="/add-task"
          className="add-button"
        >
          + Add Task
        </Link>

      </div>

      {/* Filters */}

      <div className="filters">

        <button onClick={() => setFilter("All")}>
          All
        </button>

        <button onClick={() => setFilter("Raised")}>
          Raised
        </button>

        <button onClick={() => setFilter("Pending")}>
          Pending
        </button>

      </div>

      <div className="task-list">

        {filteredTasks.length === 0 ? (

          <p className="empty">
            No tasks found.
          </p>

        ) : (

          filteredTasks.map(task => (

            <div
              className="task-card"
              key={task.id}
            >

              <div>

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

                </div>

              </div>

              <div className="task-actions">

                <Link
                  to={`/tasks/${task.id}`}
                >
                  View
                </Link>

                <button
                  onClick={() =>
                    completeTask(task.id)
                  }
                >
                  Complete
                </button>

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

          ))

        )}

      </div>

    </main>
  );
}

export default Tasks;