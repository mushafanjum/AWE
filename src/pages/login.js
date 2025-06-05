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

  // On mount, prefill from localStorage if "remember me" was checked
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  // This is the function that reads /accounts.json and checks credentials:
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      // 1) Fetch the static accounts array from public/accounts.json
      const response = await fetch("/accounts.json", { cache: "no-cache" });
      if (!response.ok) {
        throw new Error("Could not load accounts data.");
      }
      const accounts = await response.json();

      // 2) Look for a matching record
      const matched = accounts.find(
        (acct) =>
          acct.email.toLowerCase() === email.trim().toLowerCase() &&
          acct.password === password
      );

      if (matched) {
        // 3a) If "Remember me" is checked, store email locally
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", matched.email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        // 3b) Replace this alert with whatever your "success" flow is
        alert(`Login successful! Welcome back, ${matched.email}.`);
        navigate('/home');
      } else {
        // 4) No match → show error
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to verify credentials. Please try again later.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">AWE – Log In</h2>

      {error && <div className="error-msg">{error}</div>}

      <form onSubmit={handleLogin} noValidate>
        {/* ── EMAIL FIELD ──────────────────────────────────── */}
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

        {/* ── PASSWORD FIELD ───────────────────────────────── */}
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

        {/* ── FORGOT + REMEMBER ME ─────────────────────────── */}
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

        {/* ── LOGIN BUTTON ──────────────────────────────────── */}
        <button type="submit" className="primary-btn">
          Log In
        </button>
      </form>

      {/* ── CREATE ACCOUNT BUTTON ─────────────────────────── */}
      <button className="secondary-btn" onClick={() => navigate("/signup")}>
        New to AWE? Create Account
      </button>
    </div>
  );
}
