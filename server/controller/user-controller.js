//import User from "../models/User-model";

import users from "../models/users.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { uploadOnCloudinary } from "../utils/cloudinary.js";


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

    try {
        const { fullname, email, password } = req.body;
        console.log(fullname, email, password)
        console.log("files",req.file)
        let profileImgPath;
        if (req.file) {
            const profileImageBuffer = req.file?.path;
            console.log(profileImageBuffer)
            profileImgPath = await uploadOnCloudinary(profileImageBuffer);
        }
        let existingUser = await users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User Already Exist" });
        }
        if(!password){
            return res.status(404).json({message: "Password and Confirm Password mismatched..!"})
        }
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPass = bcrypt.hashSync(password, salt)

        let newUser
        if(profileImgPath){
            newUser = new users({
                fullname,
                email,
                profile: profileImgPath,
                password: hashedPass,
            })
        } else{
            newUser = new users({
                fullname,
                email,
                //profile: profileImgPath,
                password: hashedPass,
            })
        }
        

        newUser.save();

        return res.status(201).json({ users })

    } catch (error) {
        console.log(error)   
    }

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
            const token = jwt.sign({ userId: user._id,userName: user.firstname, userEmail: user.email }, process.env.SECRET_KEY, { expiresIn: '24h' });
            res.json({ message: 'user loggedin successfully', token, userName: user.firstname });
            
        } else {
            return res.status(404).json({message: "Wrong Password"})
        }
    } catch (error) {
        console.log(error)
    }

}

export const userProfile = async(req, res) => {
    try {
        const currentUser = await users.findById(req.user.userId).select('-password');
        if(!currentUser){
            return res.status(401).json(
                {
                    message: "User not found..!"
                }
            )
        }
        res.json(currentUser);
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Error fetching user data."})
    }

}

export const singleUser = async(req, res) => {
    try {
        const authID = req.params.id;
        console.log(authID);
        const currentUser = await users.findById(authID).select('-password');
        if(!currentUser){
            return res.status(401).json(
                {
                    message: "User not found..!"
                }
            )
        }
        res.json(currentUser);
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Error fetching user data."})
    }

}