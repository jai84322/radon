const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: Number,
        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isDeleted : {
        type : Boolean,
        default : true
    },
    age: Number,
}, { timestamps: true });

module.exports = mongoose.model('User2', userSchema)
