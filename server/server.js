import express from "express";
import mongoose from "mongoose";
import  cors from 'cors'
import dotenv from 'dotenv'
import userRoute from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import cloudinary from 'cloudinary'
import  commentRoutes  from "./routes/comment-routes.js";
import { contactRouter } from "./routes/contact-routes.js";
dotenv.config();

const app = express();

app.use(express.json({limit: '50mb'}));
//app.use(express.urlencoded({limit: '50mb'}));

app.use(cors({
    credentials: true,
   // origin: 'https://blogapp-akash-amrolkar.vercel.app',
    origin: 'https://akash-amrolkar-blogapp.netlify.app',
    //origin: 'http://localhost:5173'
}));
app.use('/api/users', userRoute)
app.use('/api/blogs', blogRouter)
app.use('/api/comments', commentRoutes)
app.use('/api/contact', contactRouter)


const mongoUrl = process.env.MONGODB_URL;
const port = process.env.PORT || 5000;

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
    console.log('Server is working on 5000 port')
})


//bUEFvo4zIJQX0k00
