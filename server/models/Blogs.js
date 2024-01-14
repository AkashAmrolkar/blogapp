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
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
    },
    images:{
        type: String // Assuming you store image URLs as strings
      },
},
{
    timestamps: true, 
  })

export default mongoose.model('Blogs', blogSchema)