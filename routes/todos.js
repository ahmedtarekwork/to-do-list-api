const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// get all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});

// make a new task
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json({ msg: "can't send data" });
  }
});

// edit task
router.patch("/:id", async (req, res) => {
  const updates = {};
  Object.entries(req.body).forEach((arr) => (updates[arr[0]] = arr[1]));

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, updates, {
      returnDocument: "after",
    });

    res.status(200).json(task);
  } catch (err) {
    res.status(404).json({ msg: "can't send data" });
  }
});

// delete task
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "task deleted successfully" });
  } catch (err) {
    res.status(404).send("task not found");
  }
});

module.exports = router;
