const express = require("express");

const app = express();

const port = 5000;
app.use(express.json());

const db = require("./db");

const todoModul = require("./schema");

app.post("/create/todo", (req, res) => {
  const { task, description, deadline, isCompleted, priority } = req.body;
  const todo = new todoModul({
    task,
    description,
    deadline,
    isCompleted,
    priority,
  });
  console.log("first" + todo);
  todo
    .save()
    .then((result1) => {
      res.json(result1);
    })
    .catch((err) => {
      res.json(err);
    });
  console.log("second" + todo);
});
//return all todo
app.get("/todo", (req, res) => {
  todoModul
    .find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(port, () => {
  console.log(`server run on port ${port}`);
});
