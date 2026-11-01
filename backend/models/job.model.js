import mongoose from "mongoose";


const jobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true

    },
    role: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum:['Applied', 'Interview', 'Offer', 'Rejected']
    },
    appliedDate: {
        type: Date,
        default: Date.now
    },
    link: {
        type: String,
        trim: true
    },
    notes: {
        type: String
    }

}, { timestamps: true })

export const Job =  mongoose.model('Job', jobSchema);