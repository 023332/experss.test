import express from 'express';
import {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
} from '../controllers/taskController.js';

const router = express.Router();

router.post('/tasks', createTask);
router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getTaskById);
router.post('/tasks/:id', updateTask);

export default router;