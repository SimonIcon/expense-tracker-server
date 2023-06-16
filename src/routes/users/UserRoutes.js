const express = require("express")
const { registerUsers, fetchUsers } = require("../../controllers/users/UserController")

const userRoute = express.Router()

userRoute.post('/register', registerUsers)
userRoute.get('/', fetchUsers)

module.exports = userRoute