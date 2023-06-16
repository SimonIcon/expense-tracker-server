const users = require("../../models/User");
const expressAsyncHandler = require("express-async-handler")

// register users
const registerUsers = expressAsyncHandler(async (req, res) => {
    // destructuring user model
    const { firstName, lastName, email, password } = req?.body;
    // checking if user exist
    const userExist = await users.findOne({ email })
    if (userExist) throw new Error("yooph!!! user already exists")
    try {
        await users.create({ firstName, lastName, email, password })
        res.status(200).json({ message: "user created successfully" })

    } catch (error) {
        res.json({ message: error.message })
    }
})

// fetching all user controller
const fetchUsers = expressAsyncHandler(async (req, res) => {
    try {
        const allUsers = await users.find({})
        res.json(allUsers)
    } catch (error) {
        res.json(error)
    }
})


module.exports = { registerUsers, fetchUsers }