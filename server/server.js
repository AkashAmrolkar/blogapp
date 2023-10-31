import express from "express";
import mongoose from "mongoose";
import  cors from 'cors'
import { getAllUser, login, register } from "./controller/user-controller.js";
import { addBlog, deleteBlog, getAllBlogs, getByID, updateBlog } from "./controller/blog-controller.js";
//import router from "./routes/user-routes.js";
const app = express();

//user route
const router = express.Router()

//blog route
const blogRouter = express.Router()

app.use(express.json())
app.use(cors());
app.use('/api/users', router)
app.use('/api/blogs', blogRouter)

// Users Routes
router.get('/', getAllUser);
router.post('/register', register);
router.post('/login', login);

//Blogs Routes
blogRouter.get('/', getAllBlogs);

blogRouter.post('/addblog', addBlog);
blogRouter.post('/update/:id', updateBlog);
blogRouter.get('/:id', getByID);
blogRouter.delete('/:id', deleteBlog);



mongoose.connect('mongodb+srv://akashamrolkar10:bUEFvo4zIJQX0k00@cluster0.umfttmm.mongodb.net/Blog?retryWrites=true&w=majority').then(()=>{
    app.listen(8000, ()=>{
        console.log('Server is working on 8000 port')
    })
}).then(()=>{
    console.log('server is connected to database')
}).catch((e)=>{
    console.log(e)
})



//bUEFvo4zIJQX0k00