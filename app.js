import path from 'path';
import logger from 'morgan';
import express from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';

import routers from './routes/index.js';

const app = express();

app.set('views', path.resolve('./views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve('./public')));

app.use(routers);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
    next()
});

export default app;