// backend/src/routes/folders.js
const express = require("express");
const router = express.Router();
const Folder = require("../models/Folder");

router.post("/create", async (req, res) => {
  try {
    const { name, parentId } = req.body;
    const folder = new Folder({ name, parentId });
    await folder.save();
    res.status(201).json({ folder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Implement other folder endpoints (GET, PUT, DELETE) as needed

module.exports = router;
