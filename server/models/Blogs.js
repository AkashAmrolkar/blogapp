import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    featured_img:{
        type: String // Assuming you store image URLs as strings
    },
    comments:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }
},
{
    timestamps: true, 
  })

export default mongoose.model('Blogs', blogSchema)