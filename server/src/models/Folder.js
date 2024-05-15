// backend/src/models/Folder.js

const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Folder', // Reference to the Folder model itself for self-referencing
    default: null
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model for user authentication
    required: true
  }
});

module.exports = mongoose.model('Folder', folderSchema);
