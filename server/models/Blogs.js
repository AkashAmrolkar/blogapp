import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
    },
    author:{
        type: String,
    }
},
{
    timestamps: true, 
  })

export default mongoose.model('Blogs', blogSchema)