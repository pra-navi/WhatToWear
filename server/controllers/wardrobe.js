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
