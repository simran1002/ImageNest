// backend/src/controllers/imageController.js

const Image = require("../models/Image");

// Image upload route
const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Please upload an image" });
    }

    // Create new image object with userId from token
    const image = new Image({
      filename: req.file.filename,
      folderId: req.body.folderId,
      userId: req.userId
    });
    await image.save();

    res.status(201).json({ message: "Image uploaded successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};



// Image search controller
const searchImages = async (req, res) => {
  try {
    const { imageName } = req.query;
    // Assuming you have a userId associated with each image and you want to search only within the user's images
    const images = await Image.find({ userId: req.userId, filename: { $regex: imageName, $options: "i" } });
    res.json(images);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { uploadImage, searchImages };
