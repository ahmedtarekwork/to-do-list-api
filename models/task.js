const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "task title is missing!"],
  },
  completed: {
    type: Boolean,
    require: [false],
    default: false,
  },
});

module.exports = mongoose.model("task", taskSchema);
