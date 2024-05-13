// backend/src/routes/folders.js

const express = require("express");
const router = express.Router();
const { verifyToken } = require("../utils/auth");
const Folder = require("../models/Folder");

// Create a new folder route
router.post("/create", verifyToken, async (req, res) => {
  try {
    const { name, parentId } = req.body;
    
    // Validation: Ensure name is provided
    if (!name) {
      return res.status(400).json({ message: "Name is required for the folder" });
    }
    
    // Create new folder object with userId from token
    const folder = new Folder({ name, parentId, userId: req.userId });
    await folder.save();
    
    res.status(201).json({ message: "Folder created successfully", folder });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
