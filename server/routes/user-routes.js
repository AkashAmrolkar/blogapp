import express from "express";
import { getAllUser, login, register } from "../controller/user-controller.js";
const userRoute = express.Router()

userRoute.get('/', getAllUser)
userRoute.post('/register', register)
userRoute.post('/login', verifyToken, login)

export default userRoute;