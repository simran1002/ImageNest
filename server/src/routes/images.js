const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Image = require('../models/Image');
const { uploadImage, searchImages } = require("../controllers/imageController");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Destination folder for storing uploaded images
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // Generate unique filename for each uploaded image
  },
});

// Multer upload configuration
const upload = multer({ storage });

// Upload image
router.post("/upload", upload.single("image"), uploadImage);

// Search images
router.get("/search", searchImages);

module.exports = router;
