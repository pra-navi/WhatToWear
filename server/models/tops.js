import mongoose from 'mongoose';

const topsSchema = mongoose.Schema({
    image: { type: String, default: "" },
});

export default mongoose.model("Tops", topsSchema);