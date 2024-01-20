import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import User from '../models/user.js';
import CurrentOutfits from '../models/currentOutfits.js';

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        
        if(!existingUser) return res.status(404).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        
        if(!isPasswordCorrect) return res.status(400).json({ message: "Password is incorrect." });

        const token = jwt.sign({ username: existingUser.username, id: existingUser._id }, 'test');

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const signup = async (req, res) => {
    const { username, password, confirmPassword } = req.body;

    try {
        const existingUserFullName = await User.findOne({ username });
        if(existingUserFullName) return res.status(400).json({ message: "Username is taken." });
        if(password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match." });
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ username, password: hashedPassword });
        await CurrentOutfits.create({ userId: result._id });
        const token = jwt.sign({ username: result.username, id: result._id }, 'test');
        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}
