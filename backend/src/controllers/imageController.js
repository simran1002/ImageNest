// backend/src/controllers/imageController.js

const Image = require("../models/Image");

// Image upload controller
const uploadImage = async (req, res) => {
  try {
    // Validate file and other fields
    if (!req.file) {
      throw new Error("Please upload an image");
    }
    // Save image details to the database
    const image = new Image({
      filename: req.file.filename,
      folderId: req.body.folderId, // Assuming you have a folderId associated with each image
      userId: req.userId // Assuming you store userId in req.userId after token verification
    });
    await image.save();
    res.status(201).json({ message: "Image uploaded successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
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
