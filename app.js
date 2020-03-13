const path = require('path')
let pathObj = path.parse(__filename)

console.log(pathObj)

//

const os = require('os')
let totalMemory = os.totalmem()
let freeMemory = os.freemem()

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)
