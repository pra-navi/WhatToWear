import express from 'express';
import { addTop, addBottom, addFull } from '../controllers/wardrobe.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/addTop', auth, addTop);
router.post('/addBottom', auth, addBottom);
router.post('/addFull', auth, addFull);

export default router;