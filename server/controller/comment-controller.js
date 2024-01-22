import Blogs from "../models/Blogs.js"
import Comment  from "../models/Comments.js"

export const addComment = async(req, res) => {
    const {text, postId} = req.body
    const userId = req.user.userId
    console.log(text, postId, userId)
    //const userID = req.user._id
    try {
        const newComment = new Comment({
            comment: text,
            user: userId,
            post: postId
        })
        await newComment.save()
        //console.log(newComment)
        const post = await Blogs.findById(postId)
        if(!post){
            res.send('Post not found')
        }
        post.comments.push(newComment._id)
        await post.save()
        res.json(newComment)
        console.log(post)
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

