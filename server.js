require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// routes
const tasksRoutes = require("./routes/todos");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(4000, console.log(`listining on port: ${4000}`)));

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasksRoutes);
