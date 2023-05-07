import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    concern: {
        type: String,
    },
    country: {
        type: String,
    },
    name: {
        type: String,
    },
});

const Email = mongoose.model("Email", emailSchema);

export default Email;
