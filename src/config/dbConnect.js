const mongoose = require("mongoose")
// createing function for connection
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {

            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log("database connected successfully")
    } catch (error) {
        console.log(`error while connecting to the mongoose database ${error.message}`)
    }
}
module.exports = dbConnection