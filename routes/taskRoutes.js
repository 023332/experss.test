
const express = require('express');
const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const { validateTask } = require('../validators/validator');

const router = express.Router();

router.post('/tasks', validateTask, createTask);
router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getTaskById);
router.put('/tasks/:id', validateTask, updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;