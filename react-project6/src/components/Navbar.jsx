import {
  NavLink,
  useNavigate
} from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("taskManagerLogin");

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

        <button onClick={logout}>
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;