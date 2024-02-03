import mongoose from 'mongoose'
const contactSchema = new mongoose.Schema({
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
},
    {
        timestamps: true
    }
)

module.exports('Contact', contactSchema)