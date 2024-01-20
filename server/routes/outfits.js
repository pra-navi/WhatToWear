import express from 'express';
import { refresh, getAllTops, getAllBottoms, getAllFull, getPrevOutfits, getCurrOutfits } from '../controllers/outfits.js'; '../controllers/outfits.js'

const router = express.Router();

router.patch('/refresh', refresh);

router.get('/getAllTops', getAllTops);

router.get('/getAllBottoms', getAllBottoms);

router.get('/getAllFull', getAllFull);

router.get('/getPrevOutfits' , getPrevOutfits);

router.get('/getCurrOutfits', getCurrOutfits);

export default router;