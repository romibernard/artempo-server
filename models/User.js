const mongoose = require("mongoose")

const UsersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", UsersSchema)

module.exports = User