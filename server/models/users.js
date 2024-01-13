import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    }, 
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    blogs:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blogs',
        }
    ]
})

export default mongoose.model('User', userSchema)