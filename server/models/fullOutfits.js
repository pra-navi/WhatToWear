import mongoose from 'mongoose';

const fullOutfitsSchema = mongoose.Schema({
    image: { type: String, default: "" },
});

export default mongoose.model("FullOutfits", fullOutfitsSchema);