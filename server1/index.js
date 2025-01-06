const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3001;

// Set up storage for uploaded files 
const storage = multer.diskStorage({
  destination: "./server1/uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Middleware to handle file uploads
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }
  res.status(200).send({ message: "File uploaded successfully", file: req.file });
});

// Start the server
app.listen(PORT, () => {
  console.log(`File upload server running at http://localhost:${PORT}`);
});
