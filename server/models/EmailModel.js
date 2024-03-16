import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    message: {
        type: String
    }
}, { timestamps: true });


export default mongoose.model("email", emailSchema)