import Blogs from "../models/Blogs.js"
import Comment  from "../models/Comments.js"

export const addComment = async(req, res) => {
    const {text, postId, author} = req.body
    console.log(text, postId, author)
    //const userID = req.user._id
    try {
        const newComment = new Comment({
            comment: text,
            postId,
            user: author
        })
        await newComment.save()

        const post = await Blogs.findById(postId)
        post.comments.push(newComment._id)

        await post.save()
        res.json(newComment)
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

