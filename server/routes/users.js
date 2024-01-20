import express from 'express';
import { login, signup } from '../controllers/user.js';
import User from '../models/user.js';

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);

export default router;
