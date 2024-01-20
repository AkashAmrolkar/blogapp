import express from "express";
import { getAllUser, login, register, userProfile, singleUser } from "../controller/user-controller.js";
import {upload} from '../middleware/multer.js'
import {verifyToken} from '../middleware/verifyToken.js'

const userRoute = express.Router()

userRoute.get('/', getAllUser)
userRoute.post('/register', upload.single('profile'), register)
userRoute.post('/login', login)

userRoute.get('/user', verifyToken, userProfile)

userRoute.get('/user/:id',verifyToken, singleUser)

export default userRoute;