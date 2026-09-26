import {
  Link,
  useParams,
  useNavigate
} from "react-router-dom";

function TaskDetails({ tasks, setTasks }) {

  const { id } = useParams();

  const navigate = useNavigate();

  const task = tasks.find(
    task => task.id === Number(id)
  );

  if (!task) {

    return (
      <main className="page">

        <h1>Task Not Found</h1>

        <Link to="/tasks">
          Back to Tasks
        </Link>

      </main>
    );
  }

  const completeTask = () => {

    setTasks(
      tasks.map(item =>
        item.id === task.id
          ? {
              ...item,
              status: "Closed"
            }
          : item
      )
    );

    navigate("/completed");
  };

  return (
    <main className="page">

      <div className="details-card">

        <h1>{task.header}</h1>

        <p className="description">
          {task.description}
        </p>

        <div className="details">

          <p>
            <strong>Priority:</strong>{" "}
            {task.priority}
          </p>

          <p>
            <strong>Category:</strong>{" "}
            {task.category}
          </p>

          <p>
            <strong>Raised:</strong>{" "}
            {task.raisedDate}
          </p>

          <p>
            <strong>Due Date:</strong>{" "}
            {task.dueDate}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {task.status}
          </p>

        </div>

        <div className="details-actions">

          {task.status !== "Closed" && (
            <>
              <Link
                to={`/add-task/${task.id}`}
                className="edit-button"
              >
                Edit Task
              </Link>

              <button
                onClick={completeTask}
              >
                Mark as Completed
              </button>
            </>
          )}

          <Link to="/tasks">
            Back to Tasks
          </Link>

        </div>

      </div>

    </main>
  );
}

export default TaskDetails;