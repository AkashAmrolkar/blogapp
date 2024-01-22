import express from 'express'
import { addComment } from '../controller/comment-controller.js';
import { verifyToken } from '../middleware/verifyToken.js';
const commentRoutes = express.Router();

commentRoutes.post('/add', verifyToken, addComment)

export default commentRoutes