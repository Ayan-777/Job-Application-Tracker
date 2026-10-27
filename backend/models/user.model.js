import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        minlength: [2, 'Name must be at least 2 characters long'],
        trim: true,
    },

    email:{
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        unique: true, 
        trim: true,
        match: [/\S+@\S+\.\S+/, 'Please provide a valid email address']
    },

    password: {
        type: String,
        minlength: [6, "Password must be at least 6 characters long"],
        required: [true, 'Password is required'],
        select: false,
    }

},{timestamps: true});

export const User = mongoose.model('User', userSchema);