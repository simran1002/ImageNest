// backend/src/routes/auth.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { generateToken } = require("../utils/auth");

router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }
    const token = generateToken(user._id);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

// Logout route
router.post('/logout', (req, res) => {
  // Clear the session data
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.clearCookie('sessionID'); // Clear the session cookie
    res.json({ message: 'Logout successful' });
  });
});

module.exports = router;
