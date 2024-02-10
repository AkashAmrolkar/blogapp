//import User from "../models/User-model";

import User from "../models/users.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { uploadOnCloudinary } from "../utils/cloudinary.js";


export const getAllUser = async (req, resp, next) => {
    let user;
    try {
        user = await User.find()
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
       // console.log(fullname, email, password)
        //console.log("files",req.file)
        let profileImgPath;
        if (req.file) {
            const profileImageBuffer = req.file?.path;
            console.log(profileImageBuffer)
            profileImgPath = await uploadOnCloudinary(profileImageBuffer);
        }
        let existingUser = await User.findOne({ email });
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
            newUser = new User({
                fullname,
                email,
                profile: profileImgPath,
                password: hashedPass,
            })
        } else{
            newUser = new User({
                fullname,
                email,
                //profile: profileImgPath,
                password: hashedPass,
            })
        }
        

        newUser.save();

        return res.status(201).json({ User })

    } catch (error) {
        console.log(error)   
    }

}

export const login = async (req, res) =>{
    // console.log(req.body);
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(!user){
        return res.status(401).json({message: "Invalid Email Address"})
    }
    const checkPass = bcrypt.compareSync(password, user.password)
    if(!checkPass){
        return res.status(404).json({message: "Password Incorrect"})
    }
    if(user && checkPass){
        const token = jwt.sign({ userId: user._id,userName: user.firstname, userEmail: user.email }, process.env.SECRET_KEY, { expiresIn: '24h' });
        return res.status(200).json({ message: 'user loggedin successfully', token, userName: user.firstname });
    }
}
export const userProfile = async(req, res) => {
    try {
        const currentUser = await User.findById(req.user.userId).select('-password').populate('blogs');
        console.log("Current User: ", currentUser)
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
       // console.log(authID);
        const currentUser = await User.findById(authID).select('-password').populate('blogs');
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

export const updateUser = async (req, res)=>{
    try {
        const userId= req.user.userId
        if(!userId){
           return res.status(404).json({message: "User not found"})
        }
        //console.log("UserID: ",userId)
        //const {bio,twitterUrl,facebookUrl,instagramUrl} = req.body
        //console.log(bio, twitterUrl, facebookUrl,instagramUrl)

        const updateFields = {};
        let profileUrl
        if(req.file){
            const profileImg = req.file?.path
            profileUrl = await uploadOnCloudinary(profileImg)
        }

        if (req.body.bio) {
            updateFields.bio = req.body.bio;
        }
        if (req.body.twitterUrl) {
            updateFields.twitterUrl = req.body.twitterUrl;
        }
        if (req.body.facebookUrl) {
            updateFields.facebookUrl = req.body.facebookUrl;
        }
        if (req.body.instagramUrl) {
            updateFields.instagramUrl = req.body.instagramUrl;
        }

        const updatedUser = await User.findByIdAndUpdate(userId, updateFields,
        { new: true, runValidators: true }
        );
        res.status(200).json({ message: 'User information updated successfully', updatedUser });
 
    } catch (error) {
        console.log(error)
    }
}