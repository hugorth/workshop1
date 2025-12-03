const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 80;

app.use(cors());

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from EC2!" });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});