const express = require("express");

const app = express();

const port = 5000;
app.use(express.json());

const db = require("./db");

const todoModul = require("./schema");

app.listen(port, () => {
  console.log(`server run on port ${port}`);
});
