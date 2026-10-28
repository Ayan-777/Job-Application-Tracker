import { User } from "../models/user.model.js";
import bcrypt from 'bcryptjs'

export async function register(req, res) {
    try {

        const { name, email, password } = req.body || {};

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please fill out all fields' })
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' })
        }

        const normalizeEmail = email.trim().toLowerCase();
        const exEmail = await User.findOne({ email: normalizeEmail });
        if (exEmail) {
            return res.status(409).json({ message: 'Sorry a user with that email already exist' });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email: normalizeEmail,
            password: hashPassword,
        })

        return res.status(201).json({
            message: 'User created successfully!',
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            }
        })

    } catch (error) {
        console.error(error);
        if(error.code === 11000){
            return res.status(409).json({ message: 'A record with this unique value already exists.'})
        }
        if(error.name === 'ValidationError'){

            const errorMessage = Object.values(error.errors).map((err) => { return err.message})

            return res.status(400).json({ errors: errorMessage})
        }
        return res.status(500).json({ message: 'Internal Server Error' }); 
    }


}