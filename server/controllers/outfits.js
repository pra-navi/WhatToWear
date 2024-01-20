import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import User from '../models/user.js';
import CurrentOutfits from '../models/currentOutfits.js';
import Tops from '../models/tops.js';
import Bottoms from '../models/bottoms.js';
import FullOutfits from '../models/fullOutfits.js';

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

            res.json({ message: 'Refreshed successfully.' });
        } else {
            res.json({ message: 'User not found.' });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const update = async (req, res) => {
    const { outfitType, clothesId, userId, day } = req.body;
    console.log(outfitType, clothesId, userId, day);

    try {
        const currentOutfits = await CurrentOutfits.findOne({ userId });
        console.log(currentOutfits);
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
            console.log(toUpdate); // ["2", "", "", ""]

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
            console.log(currentOutfits);

            res.json({ message: "User updated successfully." })
            
        } else {
            res.json({ message: 'User not found.' });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}