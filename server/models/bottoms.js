import mongoose from 'mongoose';

const bottomsSchema = mongoose.Schema({
    image: { type: String, default: "" },
});

export default mongoose.model("Bottoms", bottomsSchema);