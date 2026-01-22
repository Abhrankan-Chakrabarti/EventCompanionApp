// backend/index.js
import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("EventCompanionApp backend running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
