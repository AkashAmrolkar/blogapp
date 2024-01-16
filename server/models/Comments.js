import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    comment:{
        tyepe: String,
        require: true
    },
    user:{
        tyepe: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

export const Comment = mongoose.model('Comment', commentSchema)