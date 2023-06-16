// lets create an instance of our server
const express = require('express')
const dotenv = require("dotenv")
const dbConnection = require('./src/config/dbConnect')
const userRoute = require('./src/routes/users/UserRoutes')
const { errorHandler, notFound } = require('./src/middleware/errorMiddleware')
const app = express()
// dotenv configuration
dotenv.config()
// database connection
dbConnection()
// middlewares
// app.use(express.json()) built-in middleware allows us to work with json format with our express server
app.use(express.json())
// routes
app.use('/api/users', userRoute)


// errors middlewares
app.use(notFound)
app.use(errorHandler)

// exporting our app
module.exports = app