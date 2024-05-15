// Image Controller (imageController.js)
const Image = require('../models/Image');

// Upload Image
const uploadImage = async (req, res) => {
  try {
    if (!req.file || !req.body.name) {
      return res.status(400).json({ message: 'Name and Image are required fields' });
    }

    // Assuming user data is attached to the request object
    const userId = req.user ? req.user.id : null;

    const imageURL = req.file.path; // Assuming Multer stores uploaded file path in req.file.path

    const newImage = new Image({
      name: req.body.name,
      imageURL,
      folderId: req.body.folderId, // You may add folderId if you're organizing images into folders
      userId: userId // Using the userId obtained from req.user
    });

    await newImage.save();
    res.status(201).json({ message: 'Image uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Search Images
const searchImages = async (req, res) => {
  try {
    const { imageName } = req.query;
    const userId = req.user.id;

    const images = await Image.find({ userId, name: { $regex: imageName, $options: 'i' } });
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { uploadImage, searchImages };
