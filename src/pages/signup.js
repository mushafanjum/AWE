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

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  // Minimum 6 chars, at least one uppercase, one lowercase, one special character
  const isValidPassword = (value) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/.test(value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim() || !confirmPwd.trim()) {
      setError("All fields are required.");
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

    if (password !== confirmPwd) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const resp = await axios.post("http://localhost:5001/api/signup", {
        email: email.trim().toLowerCase(),
        password,
      });

      if (resp.data && resp.data.success) {
        alert("Signup successful! Please log in.");
        navigate("/login");
      } else {
        setError("Unexpected server response.");
      }
    } catch (err) {
      console.error(err);
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

        <button type="submit" className="primary-btn">
          Sign Up
        </button>
      </form>

      <div className="bottom-text">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}
