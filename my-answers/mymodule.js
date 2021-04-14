const fs = require('fs')
const path = require('path')

const mymodule = function(folder, extension, callback){
    fs.readdir(folder, function (err, list) {
        if (err){
            return callback(err)
        }
        list = list.filter(file => file.endsWith("." + extension))
        callback(null, list)
    })
}

module.exports = mymodule