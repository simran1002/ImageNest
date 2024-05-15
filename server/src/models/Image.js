// Image Model (image.js)
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageURL: { type: String, required: true },
  folderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Folder' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
