const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors());

let romes = require("./data/romes.json");

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/romes", (req, res) => {
  res.send(romes);
});

app.listen(port, (req, res) => {
  console.log(`Port is running on port ${port}`);
});
