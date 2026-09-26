import { Link } from "react-router-dom";

function Dashboard({ tasks }) {

  const total = tasks.length;

  const pending = tasks.filter(
    task => task.status === "Pending"
  ).length;

  const raised = tasks.filter(
    task => task.status === "Raised"
  ).length;

  const completed = tasks.filter(
    task => task.status === "Closed"
  ).length;

  return (
    <main className="page">

      <h1>Dashboard</h1>

      <p className="subtitle">
        Welcome to your Task Manager
      </p>

      <div className="stats">

        <div className="stat-card">
          <h2>{total}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="stat-card">
          <h2>{raised}</h2>
          <p>Raised</p>
        </div>

        <div className="stat-card">
          <h2>{pending}</h2>
          <p>Pending</p>
        </div>

        <div className="stat-card">
          <h2>{completed}</h2>
          <p>Completed</p>
        </div>

      </div>

      <Link
        to="/add-task"
        className="add-button"
      >
        + Create New Task
      </Link>

    </main>
  );
}

export default Dashboard;