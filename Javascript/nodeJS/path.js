const path = require('path')

console.log(__filename)

const parsePath = path.parse(__filename)
console.log(parsePath);