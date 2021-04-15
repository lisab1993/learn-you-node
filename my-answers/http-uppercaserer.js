const http = require('http')
const map = require('through2-map')

const myPort = process.argv[2]


const server = http.createServer(function callback (request, response){
    request.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(response)
})
server.listen(myPort)