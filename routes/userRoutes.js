import {Router} from 'express';

import controller from '../controllers/userController.js';
import auth from '../middlewares/authMiddleware.js';

const router = Router();

// renders
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

// apis
router.get('/profile', auth, controller.profile);
router.post('/login', controller.login);
router.post('/register', controller.register);

export default router;