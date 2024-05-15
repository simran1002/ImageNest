// backend/src/models/Folder.js

const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null
  },
  userId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Folder', folderSchema);
