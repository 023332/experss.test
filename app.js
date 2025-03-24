import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import path from 'path';
import authRoutes from './routes/authRoutes.js';
import otherRoutes from './routes/otherRoutes.js';

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));

// Routes
app.use('/auth', authRoutes);
app.use('/other', otherRoutes);

// Home route
app.get('/', (req, res) => {
    res.render('index');
});

export default app;