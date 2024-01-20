import express from 'express';
import { refresh, getAllTops, getAllBottoms, getAllFulls, getPrevOutfits, getCurrOutfits, update } from '../controllers/outfits.js';

const router = express.Router();

router.patch('/refresh', refresh);

router.patch('/update', update);

router.get('/getAllTops/:userId', getAllTops);

router.get('/getAllBottoms/:userId', getAllBottoms);

router.get('/getAllFulls/:userId', getAllFulls);

router.get('/getPrevOutfits' , getPrevOutfits);

router.get('/getCurrOutfits', getCurrOutfits);

export default router;