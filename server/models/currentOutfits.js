import mongoose from 'mongoose';

const currentOutfitsSchema = mongoose.Schema({
    userId: { type: String, required: true },
    lastM: {
        type: [String],
        default: ["2", "", "", ""]
    },
    lastTu: {
        type: [String],
        default: ["2", "", "", ""]
    },
    lastW: {
        type: [String],
        default: ["2", "", "", ""]
    },
    lastTh: {
        type: [String],
        default: ["2", "", "", ""]
    },
    lastF: {
        type: [String],
        default: ["2", "", "", ""]
    },
    lastSa: {
        type: [String],
        default: ["2", "", "", ""]
    },
    lastSu: {
        type: [String],
        default: ["2", "", "", ""]
    },
    M: {
        type: [String],
        default: ["2", "", "", ""]
    },
    Tu: {
        type: [String],
        default: ["2", "", "", ""]
    },
    W: {
        type: [String],
        default: ["2", "", "", ""]
    },
    Th: {
        type: [String],
        default: ["2", "", "", ""]
    },
    F: {
        type: [String],
        default: ["2", "", "", ""]
    },
    Sa: {
        type: [String],
        default: ["2", "", "", ""]
    },
    Su: {
        type: [String],
        default: ["2", "", "", ""]
    },
});

export default mongoose.model("CurrentOutfits", currentOutfitsSchema);