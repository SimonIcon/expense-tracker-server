const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
// creating a schema
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: [true, "first name is required"]
    },
    lastName: {
        type: String,
        require: [true, "last name is required"]
    },
    email: {
        type: String,
        require: [true, "email is required"]
    },
    password: {
        type: String,
        require: [true, 'password is required']
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    {
        timeStamp: true
    })

// hashing password using bcryptjs
// create a mongoose middleware as follows

userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next()
})
const users = mongoose.model('users', userSchema);
module.exports = users;