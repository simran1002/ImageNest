// backend/src/controllers/folderController.js

const Folder = require("../models/Folder");

// Create a new folder
const createFolder = async (name, parentId, userId) => {
  return await Folder.create({ name, parentId, userId });
};

// Get a folder by ID
const getFolderById = async (folderId) => {
  return await Folder.findById(folderId);
};

// Update a folder
const updateFolder = async (folderId, updates) => {
  return await Folder.findByIdAndUpdate(folderId, updates, { new: true });
};

// Delete a folder
const deleteFolder = async (folderId) => {
  return await Folder.findByIdAndDelete(folderId);
};

module.exports = { createFolder, getFolderById, updateFolder, deleteFolder };
