import express from "express";
import mongoose from "mongoose";
import  cors from 'cors'
import dotenv from 'dotenv'
import userRoute from "./routes/user-routes.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
app.use('/api/users', userRoute)

const mongoUrl = process.env.MONGODB_URL;
const port = process.env.PORT || 8000;

(async() => {
    try {
        await mongoose.connect(mongoUrl)
        .then(()=>{
            console.log('server is connected to database')
        }).catch((e)=>{
            console.log(e)
        })
    } catch (error) {
        console.log(error)
    }
})()

app.listen(port, ()=>{
    console.log('Server is working on 8000 port')
})


//bUEFvo4zIJQX0k00