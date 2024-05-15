// backend/src/routes/auth.js

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { generateToken } = require("../utils/auth");

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }
    // Create new user
    const user = new User({ username, password });
    await user.save();
    const token = generateToken(user._id);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    // Generate token
    const token = generateToken(user._id);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Logout route (just for example, as JWT tokens are stateless)
router.post("/logout", async (req, res) => {
  // You may perform additional actions here if needed, such as clearing session data
  res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;
