import { v4 as uuidv4 } from 'uuid';
import {
    validateTask,
    validateTaskDate,
    validateTaskLimit,
} from '../utlis/validate.js';

let tasks = [];


export const createTask = (req, res) => {
    const { title, description, taskDate } = req.body;


    if (!validateTask(title, description, taskDate)) {
        return res.status(400).json({ error: 'Invalid task data' });
    }


    if (!validateTaskDate(taskDate)) {
        return res.status(400).json({ error: 'Task date cannot be in the past' });
    }


    if (!validateTaskLimit(taskDate, tasks)) {
        return res.status(400).json({ error: 'Maximum 3 tasks allowed per day' });
    }

    const newTask = {
        id: uuidv4(),
        title,
        description,
        completed: false,
        taskDate,
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
};

export const getAllTasks = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;


    const sortedTasks = tasks.sort((a, b) => new Date(a.taskDate) - new Date(b.taskDate));


    const paginatedTasks = sortedTasks.slice(startIndex, endIndex);

    res.json({
        tasks: paginatedTasks,
        currentPage: page,
        totalPages: Math.ceil(tasks.length / limit),
    });
};


export const getTaskById = (req, res) => {
    const taskId = req.params.id;
    const task = tasks.find((t) => t.id === taskId);

    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
};


export const updateTask = (req, res) => {
    const taskId = req.params.id;
    const { title, description, completed, taskDate } = req.body;

    const taskIndex = tasks.findIndex((t) => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }


    tasks[taskIndex] = {
        ...tasks[taskIndex],
        title: title || tasks[taskIndex].title,
        description: description || tasks[taskIndex].description,
        completed: completed !== undefined ? completed : tasks[taskIndex].completed,
        taskDate: taskDate || tasks[taskIndex].taskDate,
    };

    res.json(tasks[taskIndex]);
};


export const deleteTask = (req, res) => {
    const taskId = req.params.id;
    const taskIndex = tasks.findIndex((t) => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    tasks.splice(taskIndex, 1);
    res.json({ message: 'Task deleted successfully' });
};