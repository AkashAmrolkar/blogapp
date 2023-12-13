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
            const token = jwt.sign({ userId: user._id, userEmail: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });

            console.log("user loggedin successfully");
        } else {
            return res.status(404).json({message: "Wrong Password"})
        }
    } catch (error) {
        console.log(error)
    }

}

export const verifyToken = (req, res, next)=>{
    const authHeader = req.header('Authorization');
    if(authHeader){
        //const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
            if(err){
                return res.status(403).json('Token is not valid')
            }

            req.userId = decoded.userId;
            req.email = decoded.email;
            next()
        })
    } else{
        res.status(401).json("you are not authenticated")
    }
}

