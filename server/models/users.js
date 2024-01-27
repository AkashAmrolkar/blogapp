import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: {
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
        minlength: 6
    },
    profile:{
        type: String,
        default: 'https://res.cloudinary.com/akashamrolkar/image/upload/v1706364547/avatar_ejimta.png'
    },
    blogs:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blogs',
        }
    ]
})

export default mongoose.model('User', userSchema)