// backend/src/routes/images.js

const express = require("express");
const router = express.Router();
const multer = require("multer");
const { verifyToken } = require("../utils/auth");
const { uploadImage, searchImages } = require("../controllers/imageController");

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Image upload route
router.post("/upload", verifyToken, upload.single("image"), uploadImage);

// Image search route
router.get("/search", verifyToken, searchImages);

module.exports = router;
