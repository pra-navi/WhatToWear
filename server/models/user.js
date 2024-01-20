import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    topId: {
        type: [String],
        default: []
    },
    bottomId: {
        type: [String],
        default: []
    },
    fullId: {
        type: [String],
        default: []
    },
});

export default mongoose.model("User", userSchema);