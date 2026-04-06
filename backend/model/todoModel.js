import mongoose from "mongoose";

const modelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,


    },
    isCompleted: {
        type: Boolean,
        default: false

    }

}, { timestamps: true })
const Model = mongoose.model("User", modelSchema);
export default Model;

