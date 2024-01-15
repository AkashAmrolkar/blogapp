import express from "express";
import { getAllUser, login, register, userProfile, singleUser } from "../controller/user-controller.js";

import {verifyToken} from '../middleware/verifyToken.js'

const userRoute = express.Router()

userRoute.get('/', getAllUser)
userRoute.post('/register', register)
userRoute.post('/login', login)

userRoute.get('/user', verifyToken, userProfile)

userRoute.get('/user/:id',verifyToken, singleUser)

export default userRoute;