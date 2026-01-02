// server.js
const express = require("express");
const cors = require("cors");  // <-- import cors
const app = express();

app.use(cors());               // <-- allow CORS for frontend requests
app.use(express.json());       // <-- parse JSON body

// Sample in-memory tasks array
let tasks = [];
let idCounter = 1;

// GET all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// POST new task
app.post("/api/tasks", (req, res) => {
  const { title, status, imageUrl } = req.body;
  const newTask = { id: idCounter++, title, status, imageUrl: imageUrl || null };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT update task (mark complete)
app.put("/api/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  Object.assign(task, req.body);
  res.json(task);
});

// DELETE task
app.delete("/api/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Task deleted" });
});

// Start server
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
