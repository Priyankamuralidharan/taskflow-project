const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/task.controller");

router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
