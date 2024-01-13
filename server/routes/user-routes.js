import express from "express";
import { getAllUser, login, register, userProfile } from "../controller/user-controller.js";

import {verifyToken} from '../middleware/verifyToken.js'

const userRoute = express.Router()

userRoute.get('/', getAllUser)
userRoute.post('/register', register)
userRoute.post('/login', login)

userRoute.get('/user', verifyToken, userProfile)

export default userRoute;