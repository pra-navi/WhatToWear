import mongoose from 'mongoose';

import User from '../models/user.js';
import Bottoms from '../models/bottoms.js';
import Tops from '../models/tops.js';
import FullOutfits from '../models/fullOutfits.js';

export const addTop = async (req, res) => {
    if (!req.userId) return res.json({ message: 'Unauthenticated' });
    const ownerId = req.userId;

    try {
        const newTop = new Tops({image: req.body.image});
        console.log(newTop);
        await newTop.save();
        const owner = await User.findById(ownerId);
        owner.topId.push(newTop._id);
        const updatedOwner = await User.findByIdAndUpdate(ownerId, owner, { new: true });
        res.json(newTop); // return the top object
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteTop = async (req, res) => {
    const { topId } = req.params;
    console.log("hello1");
    console.log(topId);
    if (!mongoose.Types.ObjectId.isValid(topId)) return res.status(404).send('No list with that id');
    if (!req.userId) return res.json({ message: 'Unauthenticated' });
    const ownerId = req.userId;

    try {
        const removedTop = await Tops.findById(topId);
        console.log(removedTop);
        console.log("hello2");
        const removedTop2 = await Tops.findOneAndDelete({ _id: topId });
        console.log("hello3");
        
        console.log("hello4");

        const owner = await User.findById(ownerId);
        owner.topId = owner.topId.filter((id) => id !== topId);
        await User.findByIdAndUpdate(ownerId, owner, { new: true });
        
        res.status(201).json(topId); // return user
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
