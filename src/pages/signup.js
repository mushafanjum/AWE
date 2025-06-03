// src/Signup.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    // 1) Basic validation
    if (!email.trim() || !password.trim() || !confirmPwd.trim()) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPwd) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // 2) POST to our Express backend on port 5001
      const resp = await axios.post("http://localhost:5001/api/signup", {
        email: email.trim(),
        password,
      });

      if (resp.data && resp.data.success) {
        alert("Signup successful! Please log in.");
        navigate("/login");
      } else {
        // Unexpected format
        setError("Unexpected server response.");
      }
    } catch (err) {
      console.error(err);
      // If backend responded with 400 and { error: "..."}
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Server error. Please try again later.");
      }
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">AWE – Create Account</h2>

      {error && <div className="error-msg">{error}</div>}

      <form onSubmit={handleSignup} noValidate>
        {/* ── EMAIL FIELD ─────────────────────────────────────────── */}
        <div className="input-group">
          <input
            type="email"
            id="signupEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            autoComplete="username"
          />
          <label htmlFor="signupEmail">Email*</label>
        </div>

        {/* ── PASSWORD FIELD ──────────────────────────────────────── */}
        <div className="input-group">
          <input
            type={showPwd ? "text" : "password"}
            id="signupPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
            autoComplete="new-password"
          />
          <label htmlFor="signupPassword">Password*</label>
          <span
            className="eye-toggle"
            onClick={() => setShowPwd((prev) => !prev)}
            title={showPwd ? "Hide password" : "Show password"}
          >
            {showPwd ? "🙈" : "👁️"}
          </span>
        </div>

        {/* ── CONFIRM PASSWORD FIELD ─────────────────────────────────── */}
        <div className="input-group">
          <input
            type={showConfirmPwd ? "text" : "password"}
            id="signupConfirmPwd"
            value={confirmPwd}
            onChange={(e) => setConfirmPwd(e.target.value)}
            placeholder=" "
            autoComplete="new-password"
          />
          <label htmlFor="signupConfirmPwd">Confirm Password*</label>
          <span
            className="eye-toggle"
            onClick={() => setShowConfirmPwd((prev) => !prev)}
            title={showConfirmPwd ? "Hide password" : "Show password"}
          >
            {showConfirmPwd ? "🙈" : "👁️"}
          </span>
        </div>

        {/* ── SUBMIT BUTTON ──────────────────────────────────────────────── */}
        <button type="submit" className="primary-btn">
          Sign Up
        </button>
      </form>

      {/* ── BOTTOM TEXT ─────────────────────────────────────────────────── */}
      <div className="bottom-text">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}
