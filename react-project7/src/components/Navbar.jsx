import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const handleLogout = () => {

    localStorage.removeItem("jwtToken");
    localStorage.removeItem("username");

    navigate("/login");
  };

  return (
    <nav className="navbar">

      <h2>Task Manager</h2>

      <div className="nav-links">

        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/tasks">
          Tasks
        </NavLink>

        <NavLink to="/add-task">
          Add Task
        </NavLink>

        <NavLink to="/completed">
          Completed
        </NavLink>

      </div>

      <div className="user-section">

        <span>
          Welcome, {username}
        </span>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;