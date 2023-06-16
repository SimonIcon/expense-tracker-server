const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 5000;
// creating http server and pass an instance of express server
const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(`my server is running at port ${PORT}`)
})