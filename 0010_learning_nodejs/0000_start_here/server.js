
// you should already know:
// - HTML, CSS, JAVA SCRIPT

// How node js differs from vanilla js:
// - node runs on a server, not in a browser (backend not frontend)
// - The console is the terminal window
// - global object instead of window object
// - Has common core modules
// - CommonJS‌ modules instead of ES6 modules
// - Nodejs is missing some JS API's like fetch 

console.log("Hello World")
// console.log(global); this will print the global object

// CommonJS imports is with require not import keyword - this is how we import common core modules in node

const os = require('os')
const path = require('path')

// this is a self-written module that we can simply import in node js and use it

// we will require the math module if we export it like module.exports = { obj }
// const math = require('./math')


// we could even destructure the module because it is returning an object - or each method is exported directly from the module
const { add, subtract, multiply, divide } = require("./math")



console.log(os.type())
console.log(os.version())
console.log(os.homedir())

// their are other common values that we always have access in node, for example __dirname or __filename
console.log(__dirname)
console.log(__filename)

// using the core module, path

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

// and this is the most useful one 
console.log(path.parse(__filename)) // this will give us an object that contains the root, the file name, file extension and so on..
// and this is what we can do ...
let obj = path.parse(__filename)
console.log(obj.name);
console.log(obj.base);
console.log(obj.ext);
console.log(obj.dir);

console.log("-----------------------------------")
console.log(`add will also work in this way -> ${add(2, 5)}`)
console.log(`this is the division -> ${divide(5, 2)}`)
console.log(`this is the multiplication -> ${multiply(4, 6)}`)
console.log(`this is the subtraction -> ${subtract(5, 4)}`)
