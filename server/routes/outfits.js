import express from 'express';
import { refresh, update } from '../controllers/outfits.js';

const router = express.Router();

router.patch('/refresh', refresh);
router.patch('/update', update);

export default router;