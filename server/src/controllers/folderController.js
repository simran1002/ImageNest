const Folder = require("../models/Folder");

// Create a new folder
const createFolder = async (name, parentId, userId) => {
  try {
    const folder = await Folder.create({ name, parentId, userId });
    return folder;
  } catch (error) {
    throw new Error(`Error creating folder: ${error.message}`);
  }
};

// Get a folder by ID
const getFolderById = async (req, res) => {
  try {
    const folderId = req.params.id;
    const folder = await Folder.findOne({ _id: folderId, userId: req.userId });
    if (!folder) {
      return res.status(404).json({ message: "Folder not found" });
    }
    res.json({ folder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a folder
const updateFolder = async (req, res) => {
  try {
    const folderId = req.params.id;
    const updates = req.body;
    const updatedFolder = await Folder.findOneAndUpdate({ _id: folderId, userId: req.userId }, updates, { new: true });
    if (!updatedFolder) {
      return res.status(404).json({ message: "Folder not found" });
    }
    res.json({ folder: updatedFolder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a folder
const deleteFolder = async (req, res) => {
  try {
    const folderId = req.params.id;
    const deletedFolder = await Folder.findOneAndDelete({ _id: folderId, userId: req.userId });
    if (!deletedFolder) {
      return res.status(404).json({ message: "Folder not found" });
    }
    res.json({ folder: deletedFolder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createFolder, getFolderById, updateFolder, deleteFolder };