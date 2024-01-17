import Blogs from "../models/Blogs.js";
import cloudinary from 'cloudinary'
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import users from "../models/users.js";


export const getAllBlogs = async(req, res, next)=>{
    let blogs
    try {
        blogs = await Blogs.find();
    } catch (error) {
        console.log(error)
    }
    if(!blogs){
        return res.status(404).json({message:"No blogs found"})
    }
    return res.status(200).json({blogs})
}

export const addBlog = async(req, res, next) => {

    try {
        console.log(req.body)
        const { title, description, userId, category } = req.body;
        const postImgs = req.files?.images[0]?.path
        //console.log('Post Image', postImgs)
        const existuser = await users.findById(userId)
        //const author = existuser.firstname;
        const thumb = await uploadOnCloudinary(postImgs)
    
        const newPost = new Blogs({
          title,    
          category,
          description,
          author: userId,
          images: thumb,
        });
    
        const savedPost = await newPost.save()
        await users.findByIdAndUpdate(userId, { $push: { blogs: savedPost._id } });


        return res.json({message: 'Post Created successfully..!', savedPost})
      } catch (err) {
        console.log(err)
      }
}

export const updateBlog = async(req, res, next) => {
    const {id, title, description, image, user} = req.body
    const blogID = req.params.id;
    let blog;
    try{
        blog = await Blogs.findByIdAndUpdate(blogID, {
            title,
            description
        })
    } catch(err){
        return console.log(err)
    }
    if(!blog){
        return res.status(500).json({message: "Unable to update the blog"})
    }
    return res.status(200).json({blog})
}

export const getByID = async(req, res, next) => {
    const id = req.params.id;
    try{
        const blog = await Blogs.findById(id).populate('author');
        if(!blog){
            return res.status(404).json({message: "Post not found"})
        }
        return res.status(200).json(blog)
    } catch(err){
        return console.log(err)

    }
    
}

export const deleteBlog = async(req, res, next)=>{
    const id = req.params.id;
    let blog;
    try{
        blog = await Blogs.findByIdAndRemove(id)
    } catch(err){
        return console.log(err)
    }
    if(!blog){
        return res.status(505).json({message: "Unable to delete"})
    }
    return res.status(200).json({message: "Successfully Deleted"})

}