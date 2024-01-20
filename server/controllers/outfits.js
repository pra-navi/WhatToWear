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
    const { userId } = req.params;
    console.log("controller1");

    try {
        const currentUser = await Users.findById(userId);
        const topIds = currentUser.topId;
        console.log(topIds);

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
    const { userId } = req.params;

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

export const getAllFulls = async (req, res) => {
    const { userId } = req.params;

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
    const { day, userId } = req.query;

    try {
        const outfits = await CurrentOutfits.findOne({ userId });
        let getOutfit = [];
        let result = [];

        if (outfits) {

            if (day === "M") {
                getOutfit = outfits.lastM;
            } else if (day === "Tu") {
                getOutfit = outfits.lastTu;
            } else if (day === "W") {
                getOutfit = outfits.lastW;
            } else if (day === "Th") {
                getOutfit = outfits.lastTh;
            } else if (day === "F") {
                getOutfit = outfits.lastF;
            } else if (day === "Sa") {
                getOutfit = outfits.lastSa;
            } else if (day === "Su") {
                getOutfit = outfits.lastSu;
            } else {
                console.log("Invalid day.");
                return res.status(400).json({ message: "Invalid day." });
            }

            result.push([getOutfit[0]]);
            if(getOutfit[1] == ""){
                result.push(["", ""]);
            } else {
                const top = await Tops.findById(getOutfit[1]);
                let temp = [];
                temp.push(top._id);
                temp.push(top.image);
                result.push(temp);
            }

            if(getOutfit[2] == ""){
                result.push(["", ""]);
            } else {
                const bottom = await Bottoms.findById(getOutfit[2]);
                let temp = [];
                temp.push(bottom._id);
                temp.push(bottom.image);
                result.push(temp);            }

            if(getOutfit[3] == ""){
                result.push(["", ""]);
            } else {
                const full = await fullOutfits.findById(getOutfit[3]);
                let temp = [];
                temp.push(full._id);
                temp.push(full.image);
                result.push(temp);            
            }
            res.status(200).json(result);
        } else {
            console.log("Invalid outfit.");
            return res.status(404).json({ message: "Invalid outfit." });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." });
    }
}

export const getCurrOutfits = async (req, res) => {
    const { day , userId } = req.query;

    try {
        const outfits = await CurrentOutfits.findOne({ userId });
        let getOutfit = [];
        let result = [];

        if (outfits) {

            if (day === "M") {
                getOutfit = outfits.M;
            } else if (day === "Tu") {
                getOutfit = outfits.Tu;
            } else if (day === "W") {
                getOutfit = outfits.W;
            } else if (day === "Th") {
                getOutfit = outfits.Th;
            } else if (day === "F") {
                getOutfit = outfits.F;
            } else if (day === "Sa") {
                getOutfit = outfits.Sa;
            } else if (day === "Su") {
                getOutfit = outfits.Su;
            } else {
                console.log("Invalid day.");
                return res.status(400).json({ message: "Invalid day." });
            }

            result.push([getOutfit[0]]);
            const top = await Tops.findById(getOutfit[1]);
            let temp = []; 
            temp.push(top[0]);
            temp.push(top[1]);
            result.push(temp);
            const bottom = await Bottoms.findById(getOutfit[2]);
            let temp1 = []; 
            temp1.push(bottom[0]);
            temp1.push(bottom[1]);
            result.push(temp1);
            const full = await fullOutfits.findById(getOutfit[3]);
            let temp2 = []; 
            temp2.push(full[0]);
            temp2.push(full[1]);
            result.push(temp2);

            res.status(200).json(result);
        } else {
            console.log("Invalid outfit.");
            return res.status(404).json({ message: "Invalid outfit." });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." });
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
    const { id } = req.query;

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

