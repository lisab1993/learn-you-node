// Write an HTTP server that serves the same text file for each request it       
// receives.

// Your server should listen on the port provided by the first argument to       
// your program.

// You must use the fs.createReadStream() method to       
//   stream the file contents to the response.

const http = require('http')
const fs = require('fs')

const myPort = process.argv[2]
const fileLocation = process.argv[3]

const server = http.createServer(function callback (request, response){
    request = fs.createReadStream(fileLocation)
    request.pipe(response)
})
server.listen(myPort)