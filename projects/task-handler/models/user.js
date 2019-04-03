const mongoose = require("mongoose")
const Schema = mongoose.Schema



const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        lowercase: true
    },
    keyCode: {
        type: String,
        required: true,
        lowercase: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    
    
})

module.exports = mongoose.model("User", userSchema)