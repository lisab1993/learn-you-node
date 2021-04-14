
let myServer = process.argv[2]

const net = require('net')
const server = net.createServer(function (socket) {
    let date = new Date()
    let y = date.getFullYear()

    let m = date.getMonth() + 1

    let d = date.getDate()

    let h = date.getHours()

    let min = date.getMinutes()


    let myDate = `${y}-${zeroes(m)}-${zeroes(d)} ${zeroes(h)}:${zeroes(min)}`

    socket.write(myDate)
    socket.end('\n')
})
server.listen(myServer)

const zeroes = (x) => {
  return (x < 10 ? "0" : "") + x;
};
