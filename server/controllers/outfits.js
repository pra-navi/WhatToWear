import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import Bottoms from '../models/bottoms.js';
import CurrentOutfits from '../models/currentOutfits.js';
import FullOutfits from '../models/fullOutfits.js';
import Tops from '../models/tops.js';
import Users from '../models/user.js';
import fullOutfits from '../models/fullOutfits.js';

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
        const outfits = await CurrentOutfits.findOne({ userId });
        let getOutfit = [];
        let result = [];

        if(outfits){ 

            if (day === "M") {
                getOutfit = outfits.lastM;
                result.push([getOutfit[0]]);
                const top = await Tops.findById(getOutfit[1]);
                result.push(top);
                const bottom = await Bottoms.findById(getOutfit[2]);
                result.push(bottom);
                const full = await fullOutfits.findById(getOutfit[3]);
                result.push(full);
            } else if (day === "Tu") {
                getOutfit = outfits.lastTu;
                result.push([getOutfit[0]]);
                const top = await Tops.findById(getOutfit[1]);
                result.push(top);
                const bottom = await Bottoms.findById(getOutfit[2]);
                result.push(bottom);
                const full = await fullOutfits.findById(getOutfit[3]);
                result.push(full);
            } else if (day === "W") {
                getOutfit = outfits.lastW;
                result.push([getOutfit[0]]);
                const top = await Tops.findById(getOutfit[1]);
                result.push(top);
                const bottom = await Bottoms.findById(getOutfit[2]);
                result.push(bottom);
                const full = await fullOutfits.findById(getOutfit[3]);
                result.push(full);
            } else if (day === "Th") {
                getOutfit = outfits.lastTh;
                result.push([getOutfit[0]]);
                const top = await Tops.findById(getOutfit[1]);
                result.push(top);
                const bottom = await Bottoms.findById(getOutfit[2]);
                result.push(bottom);
                const full = await fullOutfits.findById(getOutfit[3]);
                result.push(full);
            } else if (day === "F") {
                getOutfit = outfits.lastF;
                result.push([getOutfit[0]]);
                const top = await Tops.findById(getOutfit[1]);
                result.push(top);
                const bottom = await Bottoms.findById(getOutfit[2]);
                result.push(bottom);
                const full = await fullOutfits.findById(getOutfit[3]);
                result.push(full);
            } else if (day === "Sa") {
                getOutfit = outfits.lastSa;
                result.push([getOutfit[0]]);
                const top = await Tops.findById(getOutfit[1]);
                result.push(top);
                const bottom = await Bottoms.findById(getOutfit[2]);
                result.push(bottom);
                const full = await fullOutfits.findById(getOutfit[3]);
                result.push(full);
            } else if (day === "Su") {
                getOutfit = outfits.lastSu;
                result.push([getOutfit[0]]);
                const top = await Tops.findById(getOutfit[1]);
                result.push(top);
                const bottom = await Bottoms.findById(getOutfit[2]);
                result.push(bottom);
                const full = await fullOutfits.findById(getOutfit[3]);
                result.push(full);
            } else {
                res.status(400).json({ message: "Invalid day." });
            }
        } else {
            res.json({ message : "Invalid outfit." });
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getCurrOutfits = async (req, res) => {
    const { day , userId } = req.body;

    try {
        const outfits = await CurrentOutfits.findOne({ userId });
        let getOutfit = [];
        let result = [];

        if(outfits){ 

            if (day === "M") {
                getOutfit = outfits.M;
                result.push([getOutfit[0]]);
                const top = await Tops.findById(getOutfit[1]);
                result.push(top);
                const bottom = await Bottoms.findById(getOutfit[2]);
                result.push(bottom);
                const full = await fullOutfits.findById(getOutfit[3]);
                result.push(full);
            } else if (day === "Tu") {
                getOutfit = outfits.Tu;
                result.push([getOutfit[0]]);
                const top = await Tops.findById(getOutfit[1]);
                result.push(top);
                const bottom = await Bottoms.findById(getOutfit[2]);
                result.push(bottom);
                const full = await fullOutfits.findById(getOutfit[3]);
                result.push(full);
            } else if (day === "W") {
                getOutfit = outfits.W;
                result.push([getOutfit[0]]);
                const top = await Tops.findById(getOutfit[1]);
                result.push(top);
                const bottom = await Bottoms.findById(getOutfit[2]);
                result.push(bottom);
                const full = await fullOutfits.findById(getOutfit[3]);
                result.push(full);
            } else if (day === "Th") {
                getOutfit = outfits.Th;
                result.push([getOutfit[0]]);
                const top = await Tops.findById(getOutfit[1]);
                result.push(top);
                const bottom = await Bottoms.findById(getOutfit[2]);
                result.push(bottom);
                const full = await fullOutfits.findById(getOutfit[3]);
                result.push(full);
            } else if (day === "F") {
                getOutfit = outfits.F;
                result.push([getOutfit[0]]);
                const top = await Tops.findById(getOutfit[1]);
                result.push(top);
                const bottom = await Bottoms.findById(getOutfit[2]);
                result.push(bottom);
                const full = await fullOutfits.findById(getOutfit[3]);
                result.push(full);
            } else if (day === "Sa") {
                getOutfit = outfits.Sa;
                result.push([getOutfit[0]]);
                const top = await Tops.findById(getOutfit[1]);
                result.push(top);
                const bottom = await Bottoms.findById(getOutfit[2]);
                result.push(bottom);
                const full = await fullOutfits.findById(getOutfit[3]);
                result.push(full);
            } else if (day === "Su") {
                getOutfit = outfits.Su;
                result.push([getOutfit[0]]);
                const top = await Tops.findById(getOutfit[1]);
                result.push(top);
                const bottom = await Bottoms.findById(getOutfit[2]);
                result.push(bottom);
                const full = await fullOutfits.findById(getOutfit[3]);
                result.push(full);
            } else {
                console.log("Invalid day.");
            }
        } else {
            console.log("Invalid outfit.");
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }   
}

export const update = async (req, res) => {
    const { outfitType, clothesId, userId, day } = req.body;

    try {
        const currentOutfits = await CurrentOutfits.findOne({ userId });
        if (currentOutfits) {
            let toUpdate;
            if (day === "M") {
                toUpdate = currentOutfits.M;
            } else if (day === "Tu") {
                toUpdate = currentOutfits.Tu;
            } else if (day === "W") {
                toUpdate = currentOutfits.W;
            } else if (day === "Th") {
                toUpdate = currentOutfits.Th;
            } else if (day === "F") {
                toUpdate = currentOutfits.F;
            } else if (day === "Sa") {
                toUpdate = currentOutfits.Sa;
            } else if (day === "Su") {
                toUpdate = currentOutfits.Su;
            } else {
                res.json({ message: 'Day is incorrect.' })
            }

            if (outfitType === "top") {
                toUpdate[0] = "2";
                toUpdate[1] = clothesId;
                toUpdate[3] = "";
            } else if (outfitType === "bottom") {
                toUpdate[0] = "2";
                toUpdate[2] = clothesId;
                toUpdate[3] = "";
            } else if (outfitType === "full") {
                toUpdate[0] = 1;
                toUpdate[1] = "";
                toUpdate[2] = "";
                toUpdate[3] = clothesId;
            } else {
                res.json({ message: "Outfit Type is incorrect." })
            }

            await currentOutfits.save();

            res.json(currentOutfits);
            
        } else {
            res.json({ message: 'User not found.' });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const refresh = async (req, res) => {
    const { id } = req.body;

    try {
        const currentOutfits = await CurrentOutfits.findOne({ userId: id });
        if (currentOutfits) {
            currentOutfits.lastM = [...currentOutfits.M];
            currentOutfits.M = ["2", "", "", ""];

            currentOutfits.lastTu = [...currentOutfits.Tu];
            currentOutfits.Tu = ["2", "", "", ""];

            currentOutfits.lastW = [...currentOutfits.Tu];
            currentOutfits.W = ["2", "", "", ""];

            currentOutfits.lastTh = [...currentOutfits.Tu];
            currentOutfits.Th = ["2", "", "", ""];

            currentOutfits.lastF = [...currentOutfits.Tu];
            currentOutfits.F = ["2", "", "", ""];

            currentOutfits.lastSa = [...currentOutfits.Tu];
            currentOutfits.Sa = ["2", "", "", ""];

            currentOutfits.lastSu = [...currentOutfits.Tu];
            currentOutfits.Su = ["2", "", "", ""];

            await currentOutfits.save();

            res.json(currentOutfits);
        } else {
            res.json({ message: 'User not found.' });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

