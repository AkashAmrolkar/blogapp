import Blogs from "../models/Blogs.js";

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
    const {title, description} = req.body
    const author = req.userName
    const newBlog = new Blogs({
        title,
        description,
        author,
    })
    try{
       await newBlog.save()
    } catch(er){
         console.log(er)
    }
    return res.status(200).json({newBlog})
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