// backend/src/app.js
require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { mongoURI } = require("./src/config");

// Import routes
const authRoutes = require("./src/routes/auth");
const folderRoutes = require("./src/routes/folders");
const imageRoutes = require("./src/routes/images");

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB with new options
mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/folders", folderRoutes);
app.use("/api/images", imageRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
