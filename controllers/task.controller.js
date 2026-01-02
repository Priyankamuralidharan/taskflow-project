let tasks = [];
let taskId = 1;

// GET all tasks
const getAllTasks = (req, res) => {
  res.status(200).json(tasks);
};

// CREATE new task
const createTask = (req, res) => {
  const { title, status } = req.body;

  const newTask = {
    id: taskId++,
    title,
    status: status || "pending"
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

// UPDATE task
const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.title = req.body.title || task.title;
  task.status = req.body.status || task.status;

  res.status(200).json(task);
};

// DELETE task
const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== id);

  res.status(200).json({ message: "Task deleted successfully" });
};

// ✅ VERY IMPORTANT EXPORT
module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
};
