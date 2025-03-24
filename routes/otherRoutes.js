import express from 'express';
import { someOtherFunction } from '../controllers/otherController.js';

const router = express.Router();

router.get('/some-endpoint', someOtherFunction);

export default router;