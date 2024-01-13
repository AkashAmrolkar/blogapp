import express from "express";
import { addBlog, deleteBlog, getAllBlogs, updateBlog } from "../controller/blog-controller.js";
import {upload} from '../middleware/multer.js'
const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.post('/create-post', upload.fields([{name: 'images', maxCount: 1}]) , addBlog);
blogRouter.put('/:id', updateBlog);
blogRouter.delete('/:id', deleteBlog)

export default blogRouter