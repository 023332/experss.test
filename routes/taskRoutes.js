import express from 'express';
import taskController from '../controllers/taskController.js';

const router = express.Router();


router.post('/', taskController.createTask);


router.get('/', taskController.getAllTasks);


router.get('/:id', taskController.getTaskById);


router.put('/:id', taskController.updateTask);


router.delete('/:id', taskController.deleteTask);

export default router;
