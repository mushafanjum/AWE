// src/Login.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  // Password: min 6 chars, at least one uppercase, one lowercase, one special char
  const isValidPassword = (value) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/.test(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    if (!isValidEmail(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!isValidPassword(password)) {
      setError(
        "Password must be at least 6 characters, include one uppercase letter, one lowercase letter, and one special character."
      );
      return;
    }

    try {
      const resp = await fetch("http://localhost:5001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password,
        }),
      });
      const data = await resp.json();

      if (!resp.ok) {
        throw new Error(data.error || "Login failed");
      }

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", data.email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      alert(`Login successful! Welcome back, ${data.email}.`);
      navigate("/home");
    } catch (err) {
      console.error(err);
      setError(err.message || "Unable to verify credentials. Try again later.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">AWE – Log In</h2>

      {error && <div className="error-msg">{error}</div>}

      <form onSubmit={handleLogin} noValidate>
        <div className="input-group">
          <input
            type="email"
            id="loginEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            autoComplete="username"
          />
          <label htmlFor="loginEmail">AWE Email*</label>
        </div>

        <div className="input-group">
          <input
            type={showPwd ? "text" : "password"}
            id="loginPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
            autoComplete="current-password"
          />
          <label htmlFor="loginPassword">Password*</label>
          <span
            className="eye-toggle"
            onClick={() => setShowPwd((prev) => !prev)}
            title={showPwd ? "Hide password" : "Show password"}
          >
            {showPwd ? "🙈" : "👁️"}
          </span>
        </div>

        <div className="extra-options">
          <button
            type="button"
            onClick={() => alert("Password‐reset flow not implemented.")}
            style={{
              background: "none",
              border: "none",
              color: "#e05a2f",
              cursor: "pointer",
            }}
          >
            Forgot your password?
          </button>
          <label className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me on this device
          </label>
        </div>

        <button type="submit" className="primary-btn">
          Log In
        </button>
      </form>

      <button className="secondary-btn" onClick={() => navigate("/signup")}>
        New to AWE? Create Account
      </button>
    </div>
  );
}
