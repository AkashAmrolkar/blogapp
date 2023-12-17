import express from "express";
import { getAllUser, login, register } from "../controller/user-controller.js";
const userRoute = express.Router()

userRoute.get('/', getAllUser)
userRoute.post('/register', register)
userRoute.post('/login', login)

export default userRoute;