import express from "express";
import { addBlog, deleteBlog, getAllBlogs, getByID, updateBlog, postLike } from "../controller/blog-controller.js";
import {upload} from '../middleware/multer.js'
import { verifyToken } from "../middleware/verifyToken.js";
const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.post('/create-post',verifyToken ,upload.single('thumbnail'), addBlog);
blogRouter.put('/:id', updateBlog);
blogRouter.get('/:id', getByID);
blogRouter.delete('/:id', deleteBlog)
blogRouter.put('/like/:id',verifyToken, postLike)

export default blogRouter