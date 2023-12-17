//import User from "../models/User-model";

import users from "../models/users.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'


export const getAllUser = async (req, resp, next) => {
    let user;
    try {
        user = await users.find()
    } catch (error) {
        console.log(error)
    }
    if (!user) {
        return resp.status(404).json({ message: "No user found" })
    }
    return resp.status(200).json({ user })
}


export const register = async (req, res, next) => {
    const { firstname, lastname, email, password } = req.body;
    let existingUser;
    try {
        existingUser = await users.findOne({ email });
    } catch (error) {
        console.log(error)
    }

    if (existingUser) {
        return res.status(400).json({ message: "User Already Exist" });
    }

    const hashedPass = bcrypt.hashSync(password)

    const newUser = new users({
        firstname,
        lastname,
        email,
        password: hashedPass,
    })
    try {
        newUser.save();
    } catch (error) {
        console.log(error)
    }
    return res.status(201).json({ users })
}


export const login = async (req, res, next) => {
    const { email, password } = req.body;
    let user;
    try {
        user = await users.findOne({ email });
        const isPasswordCorrect = bcrypt.compareSync(password, user.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Password Incorrect" });

        }
        if (!user) {
            return res.status(404).json({ message: "Could not find the user with this Email please try another one" });
        }

        if (user && isPasswordCorrect) {
            // Generate web tokens
            const token = jwt.sign({ userId: user._id,userName: user.firstname, userEmail: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
            res.json({ message: 'user loggedin successfully', token, userName: user.firstname });
            
        } else {
            return res.status(404).json({message: "Wrong Password"})
        }
    } catch (error) {
        console.log(error)
    }

}