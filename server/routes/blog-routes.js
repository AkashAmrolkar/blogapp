import express from "express";
import { addBlog, deleteBlog, getAllBlogs, updateBlog } from "../controller/blog-controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.post('/create-post', verifyToken, addBlog);
blogRouter.put('/:id', updateBlog);
blogRouter.delete('/:id', deleteBlog)

export default blogRouter