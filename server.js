// server.js
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5001; // or whichever port you chose

// 1) Enable CORS for all routes
app.use(cors());

// 2) Middleware to parse JSON request bodies
app.use(express.json());

// Path to public/accounts.json
const accountsPath = path.join(__dirname, "public", "accounts.json");

function readAccounts() {
  try {
    const raw = fs.readFileSync(accountsPath, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading accounts.json:", err);
    return [];
  }
}

function writeAccounts(arr) {
  try {
    fs.writeFileSync(accountsPath, JSON.stringify(arr, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing accounts.json:", err);
    throw err;
  }
}

app.post("/api/signup", (req, res) => {
  const { email, password } = req.body || {};
  if (typeof email !== "string" || typeof password !== "string") {
    return res.status(400).json({ error: "Email and password are required." });
  }

  let accounts = readAccounts();
  const exists = accounts.some(
    (acct) => acct.email.toLowerCase() === email.trim().toLowerCase()
  );
  if (exists) {
    return res
      .status(400)
      .json({ error: "An account with that email already exists." });
  }

  accounts.push({ email: email.trim(), password });
  try {
    writeAccounts(accounts);
  } catch (err) {
    return res.status(500).json({ error: "Failed to write to accounts.json." });
  }

  return res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Write server listening on port ${PORT}`);
});
