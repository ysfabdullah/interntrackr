import mongoose from "mongoose";

// 1 - create a scheme

const internshipSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    stipend: {
        type: String,
        required: true,
    },
    applyBy: {
        type: Date, 
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
},
{
    timestamps: true } // createdAt, updatedAt
);


const Internship = mongoose.model("Internship", internshipSchema)
export default Internship


