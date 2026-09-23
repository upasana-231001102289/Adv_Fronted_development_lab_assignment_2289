import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    if (username === "admin" && password === "1234") {

      localStorage.setItem("taskManagerLogin", "true");

      navigate("/dashboard");

    } else {

      alert("Invalid username or password");

    }
  };

  return (
    <div className="login-page">

      <form
        className="login-box"
        onSubmit={handleLogin}
      >

        <h1>Task Manager</h1>

        <p>Login to continue</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Login
        </button>

        <small>
          Username: admin | Password: 1234
        </small>

      </form>

    </div>
  );
}

export default Login;