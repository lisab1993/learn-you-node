const fs = require('fs')

let file = process.argv[2]

let buff = fs.readFile(file, 'utf8', function callback(err, data){
    if (file){
        let newLines = data.split('\n').length - 1
        console.log(newLines)
    }
})
