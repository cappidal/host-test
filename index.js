const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Here is my first api");
});

app.listen(PORT, () => {
  console.log("server is running");
});
