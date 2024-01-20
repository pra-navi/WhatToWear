import express from 'express';
import { addTop } from '../controllers/wardrobe.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/addTop', addTop);

export default router;