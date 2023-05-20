import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

const donationModel = mongoose.model("donation", donationSchema);
export default donationModel;

