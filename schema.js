const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  description: { type: String },
  deadline: { type: Date },
  isCompleted: { type: Boolean },
  priority: { type: String },
});
module.exports = mongoose.model("Todo", todoSchema);
