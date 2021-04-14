const http = require('http')
let output = []
let count = 0

const myList = process.argv.slice(2)



for (let i = 0; i < myList.length; i++){

    http.get(myList[i], (response) => {
        response.setEncoding('utf8')
        let data = ''
    
        response.on('data', (chunk) => {
            data += chunk  
        })
    
        response.on('end', () => {
            output[i] = data
            count++
            if (count === myList.length){
                output.forEach(element => {
                    console.log(element)
                });

            }
        })
    })
}


































// http.get(two, (response) => {
//     response.setEncoding('utf8')
//     let data = ''

//     response.on('data', (chunk) => {
//         data += chunk
//     })

//     response.on('end', () => {
//         output[1] = data
//         count++
//         if (count === 3){
//             console.log(output[0])
//             console.log(output[1])
//             console.log(output[2])
//         }
//     })
// })


// http.get(three, (response) => {
//     response.setEncoding('utf8')
//     let data = ''

//     response.on('data', (chunk) => {
//         data += chunk
//     })

//     response.on('end', () => {
//         output[2] = data
//         count++
//         if (count === 3){
//             console.log(output[0])
//             console.log(output[1])
//             console.log(output[2])
//         }
//     })
// })

