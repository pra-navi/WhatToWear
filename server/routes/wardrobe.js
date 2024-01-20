import express from 'express';
import { addTop, deleteTop } from '../controllers/wardrobe.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/addTop', auth, addTop);
router.delete('/deleteTop/:topId', auth, deleteTop);

export default router;