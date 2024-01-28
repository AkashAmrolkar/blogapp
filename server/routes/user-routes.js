import express from "express";
import { getAllUser, login, register, userProfile, singleUser, updateUser } from "../controller/user-controller.js";
import {upload} from '../middleware/multer.js'
import {verifyToken} from '../middleware/verifyToken.js'

const userRoute = express.Router()

userRoute.get('/', getAllUser)
userRoute.post('/register', upload.single('profile'), register)
userRoute.post('/login', login)

userRoute.get('/profile', verifyToken, userProfile)

userRoute.get('/author/:id', singleUser)

userRoute.put('/update',verifyToken, upload.single('profile'), updateUser)


export default userRoute;