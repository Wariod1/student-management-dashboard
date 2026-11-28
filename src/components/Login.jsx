import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (username.trim() === "" || password === "") {
      setError("Please enter your username and password.");
      return;
    }

    const success = onLogin(username.trim(), password);

    if (!success) {
      setError("Incorrect username or password.");
      setPassword("");
    }
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit} noValidate>
        <h1>Admin Login</h1>
        <p className="login-subtitle">Student Management Dashboard</p>

        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            autoComplete="username"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            autoComplete="current-password"
          />
        </label>

        {error && <span className="error">{error}</span>}

        <button type="submit">Log In</button>

        <p className="login-hint">Demo login: admin / admin123</p>
      </form>
    </div>
  );
}

export default Login;