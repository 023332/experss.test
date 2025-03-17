
import { v4 as uuidv4 } from 'uuid';
import db from '../utils/db.js';

class Task {
    constructor(title, description, taskDate) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.completed = false;
        this.taskDate = taskDate;
    }

    static async createTask(title, description, taskDate) {
        const task = new Task(title, description, taskDate);
        const query = 'INSERT INTO tasks (id, title, description, completed, taskDate) VALUES (?, ?, ?, ?, ?)';
        await db.execute(query, [task.id, task.title, task.description, task.completed, task.taskDate]);
        return task;
    }

    static async getAllTasks(page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const query = 'SELECT * FROM tasks ORDER BY taskDate LIMIT ?, ?';
        const [rows] = await db.execute(query, [offset, limit]);
        return rows;
    }

    static async getTaskById(id) {
        const query = 'SELECT * FROM tasks WHERE id = ?';
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }

    static async updateTask(id, title, description, completed, taskDate) {
        const query = 'UPDATE tasks SET title = ?, description = ?, completed = ?, taskDate = ? WHERE id = ?';
        await db.execute(query, [title, description, completed, taskDate, id]);
        return { id, title, description, completed, taskDate };
    }

    static async deleteTask(id) {
        const query = 'DELETE FROM tasks WHERE id = ?';
        await db.execute(query, [id]);
        return { message: 'Task has been removed' };
    }
}

module.exports = Task;