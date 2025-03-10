import { v4 as uuidv4 } from 'uuid';
import { validateTask, validateTaskDate, validateTaskLimit } from '../utils/validate.js';

let tasks = [];

export const createTask = (req, res) => {
    const { title, description, taskDate } = req.body;

    const validationError = validateTask(title, description, taskDate);
    if (validationError) {
        return res.status(400).json({ error: validationError });
    }

    if (!validateTaskDate(taskDate)) {
        return res.status(400).json({ error: 'Task date cannot be in the past' });
    }

    if (!validateTaskLimit(taskDate, tasks)) {
        return res.status(400).json({ error: 'Maximum of 3 tasks allowed per day' });
    }

    const newTask = {
        id: uuidv4(),
        title,
        description,
        completed: false,
        taskDate,
    };

    tasks.push(newTask);
    tasks.sort((a, b) => new Date(a.taskDate) - new Date(b.taskDate));
    res.status(201).json(newTask);
};

export const getTasks = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    const paginatedTasks = tasks.slice(startIndex, startIndex + pageSize);
    res.json(paginatedTasks);
};

export const getTaskById = (req, res) => {
    const task = tasks.find(t => t.id === req.params.id);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
};

export const updateTask = (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === req.params.id);
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    const { title, description, completed, taskDate } = req.body;
    const validationError = validateTask(title, description, taskDate);
    if (validationError) {
        return res.status(400).json({ error: validationError });
    }

    tasks[taskIndex] = { ...tasks[taskIndex], title, description, completed, taskDate };
    res.json(tasks[taskIndex]);
};

export const deleteTask = (req, res) => {
    tasks = tasks.filter(t => t.id !== req.params.id);
    res.json({ message: 'Task deleted' });
};