import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import Bottoms from '../models/bottoms';
import CurrentOutfits from '../models/currentOutfits';
import FullOutfits from '../models/fullOutfits';
import Tops from '../models/tops';
import Users from '../models/users';

export const getAllTops = async (req, res) => {
    const { userId } = req.body;

    try {
        const tops = await Users.findById(userId);
        const topIds = tops.topId;

        let topEntry = [];

        for (let i = 0; i < topIds.length; i++) {
            const curr = await Tops.findById(topIds[i]);
            topEntry.push(curr);
        }

        res.status(200).json(topEntry);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getAllBottoms = async (req, res) => {
    const { userId } = req.body;

    try {
        const bottoms = await Users.findById(userId);
        const bottomIds = bottoms.bottomId;

        let bottomEntry = [];

        for (let i = 0; i < bottomIds.length; i++) {
            const curr = await Bottoms.findById(bottomIds[i]);
            bottomEntry.push(curr);
        }

        res.status(200).json(bottomEntry);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getAllFull = async (req, res) => {
    const { userId } = req.body;

    try {
        const full = await Users.findById(userId);
        const fullIds = full.fullId;

        let fullEntry = [];

        for (let i = 0; i < fullIds.length; i++) {
            const curr = await FullOutfits.findById(fullIds[i]);
            fullEntry.push(curr);
        }

        res.status(200).json(fullEntry);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPrevOutfits = async (req, res) => {
    const { day , userId } = req.body;

    try {
        const outfits = await CurrentOutfits.findOne({userId});
        let getOutfit = [];

        if(outfits){ 

            if (day == "M") {
                getOutfit = outfits.lastM;
            } else if (day == "Tu") {
                getOutfit = outfits.lastTu;
            } else if (day == "W") {
                getOutfit = outfits.lastW;
            } else if (day == "Th") {
                getOutfit == outfits.lastTh;
            } else if (day == "F") {
                getOutfit = outfits.lastF;
            } else if (day == "Sa") {
                getOutfit = outfits.lastSa;
            } else if (day = "Su") {
                getOutfit = outfits.lastSu;
            } else {
                res.json({ message : "Invalid day." });
            }
        } else {
            res.json({ message : "Invalid day." });
        }

        res.status(200).json(getOutfit);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getCurrOutfits = async (req, res) => {
    const { day , userId } = req.body;

    try {
        const outfits = await CurrentOutfits.findOne({userId});
        let getOutfit = [];

        if(outfits){ 

            if (day == "M") {
                getOutfit = outfits.M;
            } else if (day == "Tu") {
                getOutfit = outfits.Tu;
            } else if (day == "W") {
                getOutfit = outfits.W;
            } else if (day == "Th") {
                getOutfit == outfits.Th;
            } else if (day == "F") {
                getOutfit = outfits.F;
            } else if (day == "Sa") {
                getOutfit = outfits.Sa;
            } else if (day = "Su") {
                getOutfit = outfits.Su;
            } else {
                res.json({ message : "Invalid day." });
            }
        } else {
            res.json({ message : "Invalid day." });
        }

        res.status(200).json(getOutfit);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }   
}
