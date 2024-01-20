import express from 'express';
import { refresh, getAllTops, getAllBottoms, getAllFull, getPrevOutfits, getCurrOutfits, update } from '../controllers/outfits.js';

const router = express.Router();

router.patch('/refresh', refresh);

router.patch('/update', update);

router.get('/getAllTops', getAllTops);

router.get('/getAllBottoms', getAllBottoms);

router.get('/getAllFull', getAllFull);

router.get('/getPrevOutfits' , getPrevOutfits);

router.get('/getCurrOutfits', getCurrOutfits);

router.patch('/update', update);

export default router;