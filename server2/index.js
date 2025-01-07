const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3002;

app.get("/upload-file", async (req, res) => {
  try {
    const filePath = path.resolve(__dirname, "sample.txt"); // Replace with the file to be uploaded
    const formData = new FormData();

    // Append the file to the form data
    formData.append("file", fs.createReadStream(filePath));

    // Upload to the first server
    const response = await axios.post("https://server1-fileupload-4u6g14qyvw.dcdeploy.cloud/upload", formData, {
      headers: formData.getHeaders(),
    });

    res.status(200).send(response.data);
  } catch (error) {
    console.error("Error uploading file:", error.message);
    res.status(500).send({ error: "Failed to upload file" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`File uploader server running at http://localhost:${PORT}`);
});
