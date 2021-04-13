const fs = require('fs')

let buff = fs.readFileSync(process.argv[2])
let stringy = buff.toString()
let newLines = stringy.split('\n').length - 1
console.log(newLines)
