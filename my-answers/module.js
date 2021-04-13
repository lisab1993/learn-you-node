const fs = require('fs')
const path = require('path')

const file = process.argv[2]
const extension = '.' + process.argv[3]


fs.readdir(file, function (err, list) {
    if (err){
        return console.log(err)
    }
    list.filter(file => file.endsWith(extension))
    .forEach(file => console.log(file))
})




