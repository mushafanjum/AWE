// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // if you prefer storing URI in .env

const app = express();
const PORT = process.env.PORT || 5001;

// ─── 1) MIDDLEWARE ────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ─── 2) MONGOOSE SETUP ────────────────────────────────────────────
// Replace the URI below with your Atlas connection string (or store it in .env)
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://mushaf:Ma%4012345@cluster0.wvbbuwb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// ─── 3) DEFINE A SIMPLE USER SCHEMA ────────────────────────────────
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// ─── 4) SIGNUP ROUTE ───────────────────────────────────────────────
// Expect { email, password } in req.body
app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    // Check if user already exists
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res
        .status(400)
        .json({ error: "An account with that email already exists." });
    }

    // Create new user document
    const newUser = new User({ email: email.toLowerCase(), password });
    await newUser.save();
    return res.json({ success: true });
  } catch (err) {
    console.error("Error during signup:", err);
    return res.status(500).json({ error: "Server error. Please try again." });
  }
});

// ─── 5) LOGIN ROUTE ────────────────────────────────────────────────
// Expect { email, password } in req.body
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    // Find user by email (case-insensitive)
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    // On success, you can return some profile data or a JWT
    return res.json({ success: true, email: user.email });
  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).json({ error: "Server error. Please try again." });
  }
});

// ─── 6) START SERVER ───────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Express backend listening on port ${PORT}`);
});
