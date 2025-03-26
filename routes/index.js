import { Router } from 'express';

import users from './userRoutes.js';

const router = Router();

router.get(['/', '/home'], (req, res) => {
  res.render('home', { title: 'Auth test project' });
});

router.use('/users', users)

export default router;
