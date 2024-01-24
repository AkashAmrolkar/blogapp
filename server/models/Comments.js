import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    comment:{
        type: String,
        require: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blogs'
    }

},
{
    timestamps: true, 
  })

export default mongoose.model('Comment', commentSchema)