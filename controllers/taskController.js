
const Task = require('../models/taskModel');

const createTask = async (req, res) => {
    const { title, description, taskDate } = req.body;
    try {
        const task = await Task.createTask(title, description, taskDate);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllTasks = async (req, res) => {
    const { page = 1 } = req.query;
    try {
        const tasks = await Task.getAllTasks(page);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.getTaskById(id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed, taskDate } = req.body;
    try {
        const task = await Task.updateTask(id, title, description, completed, taskDate);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await Task.deleteTask(id);
        res.status(200).json({ message: 'Task has been removed' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
};