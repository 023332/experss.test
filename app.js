
const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());
app.use('/api', taskRoutes);

module.exports = app;