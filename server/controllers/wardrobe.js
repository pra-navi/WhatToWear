import User from '../models/user.js';
import Bottoms from '../models/bottoms.js';
import Tops from '../models/tops.js';
import FullOutfits from '../models/fullOutfits.js';

export const addTop = async (req, res) => {
    console.log(req.body);
    console.log(req.body.image);

    try {
        console.log("hello");
        const newTop = new Tops({image: req.body.image});
        console.log("hello2");
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

/*
    if (!req.userId) return res.json({ message: 'Unauthenticated' });
    const ownerId = req.userId;
    console.log(req.body);
    const {image} = req.body;
    console.log(image);
    console.log(req.body.image);

    try {
        console.log("hello");
        console.log(req.body['image']);
        const newTop = new Tops({image: req.body});
        console.log("hello2");
        console.log(newTop);
        await newTop.save();
        const owner = await User.findById(ownerId);
        owner.topId.push(newTop._id);
        const updatedOwner = await User.findByIdAndUpdate(ownerId, owner, { new: true });
        res.json(newTop); // return the top object
    } catch (error) {
        res.status(409).json({ message: error.message });
    }


 */