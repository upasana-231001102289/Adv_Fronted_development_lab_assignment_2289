import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  // Check password strength
  const checkPasswordStrength = (password) => {
    if (password.length === 0) {
      setPasswordStrength("");
    } 
    else if (password.length < 4) {
      setPasswordStrength("Weak");
    } 
    else if (password.length < 8) {
      setPasswordStrength("Medium");
    } 
    else {
      setPasswordStrength("Strong");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;

    setPassword(value);
    checkPasswordStrength(value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation
    if (username.trim() === "") {
      setError("Username is required");
      return;
    }

    if (password.trim() === "") {
      setError("Password is required");
      return;
    }

    // Demo login credentials
    if (username !== "admin" || password !== "1234") {
      setError("Invalid username or password");
      return;
    }

    /*
      JWT Token Simulation
    */
    const fakeToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
      btoa(username) +
      ".simulationToken123";

    // Store authentication information
    localStorage.setItem("jwtToken", fakeToken);
    localStorage.setItem("username", username);

    // Remember User
    if (remember) {
      localStorage.setItem("rememberUser", "true");
    } else {
      localStorage.removeItem("rememberUser");
    }

    setError("");

    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <h1>Task Manager</h1>

        <h2>Login</h2>

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin}>

          {/* Username */}
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password */}
          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />

          {/* Password Strength */}
          {passwordStrength && (
            <p className="password-strength">
              Password Strength: <strong>{passwordStrength}</strong>
            </p>
          )}

          {/* Remember User */}
          <div className="remember-user">

            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />

            <span>Remember Me</span>

          </div>

          <button type="submit">
            Login
          </button>

        </form>

        <p className="demo-login">
          Demo Login: <b>admin</b> / <b>1234</b>
        </p>

      </div>

    </div>
  );
}

export default Login;