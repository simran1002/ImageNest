const express = require("express");
const router = express.Router();
const { createFolder, getFolderById, updateFolder, deleteFolder } = require("../controllers/folderController");

router.post("/create", async (req, res) => {
  try {
    const { name, parentId, userId } = req.body; // Extract name, parentId, and userId from request body
    const folder = await createFolder(name, parentId, userId); // Call createFolder function with provided parameters
    res.status(201).json({ message: "Folder created successfully", folder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Get a folder by ID
router.get("/:id", async (req, res) => {
  try {
    const folderId = req.params.id;
    const folder = await getFolderById(folderId);
    if (!folder) {
      return res.status(404).json({ message: "Folder not found" });
    }
    res.json({ folder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a folder
router.put("/:id", async (req, res) => {
  try {
    const folderId = req.params.id;
    const updates = req.body;
    const updatedFolder = await updateFolder(folderId, updates);
    if (!updatedFolder) {
      return res.status(404).json({ message: "Folder not found" });
    }
    res.json({ folder: updatedFolder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a folder
router.delete("/:id", async (req, res) => {
  try {
    const folderId = req.params.id;
    const deletedFolder = await deleteFolder(folderId);
    if (!deletedFolder) {
      return res.status(404).json({ message: "Folder not found" });
    }
    res.json({ message: "Deleted the folder successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
