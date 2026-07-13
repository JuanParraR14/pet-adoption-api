import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema(
    {
        petName: {
            type: String,
            required: true,
            trim: true
        },

        species: {
            type: String,
            required: true
        },

        adopterName: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: ["Pending", "Approved", "Rejected"],
            default: "Pending"
        },

        adoptedAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        versionKey: false
    }
);

export default mongoose.model("Adoption", adoptionSchema);