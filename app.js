const express = require("express");

const app = express();

const port = 5000;
app.use(express.json());

const db = require("./db");

const todoModule = require("./schema");

app.post("/create/todo", (req, res) => {
  const { task, description, deadline, isCompleted, priority } = req.body;
  const todo = new todoModule({
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
  todoModule
    .find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

//return all todo is completed
app.get("/todo/completed", (req, res) => {
  todoModule
    .find({ isCompleted: true })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

//updating the todo list item.
app.put("/todo/update/:task", (req, res) => {
  const task1 = req.params.task;
  const { task, description, deadline, isCompleted, priority } = req.body;
  todoModule
    .findOneAndUpdate({ task:task1 },{task, description, deadline, isCompleted, priority})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

//deleting the todo list item.
app.delete("/todo/delete/:task", (req, res) => {
  const task1 = req.params.task;
  todoModule
    .findOneAndDelete({ task:task1 } )
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
