import Blogs from "../models/Blogs.js";
import cloudinary from 'cloudinary'
import { uploadOnCloudinary } from "../utils/cloudinary.js";


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
        const { title, description } = req.body;
        const postImgs = req.files?.images?.path
        console.log('Post Image', postImgs)

        const thumb = await uploadOnCloudinary(postImgs)
        //const images = await req.file.path; // Assuming Multer has uploaded files to Cloudinary
        //console.log('Thumb: ', thumb)
        // if(thumb){
        //     res.status(200).json({message: "uploaded", thumb})
        // }
    
        const newPost = new Blogs({
          title,
          description,
          images: thumb,
        });
    
        const savedPost = await newPost.save();
        res.json(savedPost);
      } catch (err) {
        console.log(err)
      }

    // try {
    //     const{title, description} = req.body
    //     await cloudinary.v2.uploader.upload(req.images, function(err, result){
    //         if(err){
    //             res.status(404).json({message: "not Uploaded"})
    //         }
    //         imgUrl = result.secure_url;
    //         imgId = result.public_id
    //     })
    //     const newBlog = new Blogs({
    //         title,
    //         description,
    //         images: {
    //             'img_url': imgUrl,
    //             'public_id': imgId
    //         }
    //     })
    //     if(newBlog){
    //         newBlog.save()
    //     } else{
    //         console.log('not saved')
    //     }
       
    // } catch (error) {
    //     console.log(error)
    // }
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
    let blog;
    try{
        blog = await Blogs.findById(id)
    } catch(err){
        return console.log(err)

    }
    if(!blog){
        return res.status(404).json({message: "Post not found"})
    }
    return res.status(200).json({blog})
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