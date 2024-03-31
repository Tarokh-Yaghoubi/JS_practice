
// JavaScript Numbers and Number Methods

const myNumber = 43
const strMyNumber = "43"
const myFloat = 43.01
const myString = "45.7645assc"

console.log(myNumber)
console.log(myFloat)
console.log(myFloat == myNumber)        // these are not the same at all, it will return false
console.log(myNumber == strMyNumber)    // this is true, because == will not check the type, it will only check the values


console.log(strMyNumber + 5)    // this will be "435"
console.log(Number(strMyNumber) + 4)    // this is 47 - because I am converting strMyNumber to a Number using the Number function (Type Conversion)
console.log(Number(strMyNumber) === myNumber)   // the result is not true, because we are converting strMyNumber to a number using the Number function


// If we try to pass something which is not a number to the Number function, it will return NaN (Not a Number)
console.log(Number("tarokh"))       // NaN
console.log(Number(undefined))      // NaN
console.log(Number(true))           // this will return 1, because true is 1.
console.log(Number(false))          // this will return 0. becaues false is 0.


// isInteger: this method determines if the value passed to it is an integer or not

console.log(`is myFloat an Integer or not ? ---->>> ${Number.isInteger(myFloat)}`)


// parseFloat: this method parses an argument and it will return a floating point number . If the number cannot be parsed, it will return NaN.
console.log(`calling Number.parseFloat on myNumber ---> ${Number.parseFloat(myNumber)}`)
console.log(`calling Number.parseFloat on myFloat ---> ${Number.parseFloat(myFloat)}`)
console.log(`calling Number.parseFloat on strMyNumber ---> ${Number.parseFloat(strMyNumber)}`)
console.log(`calling Number.parseFloat on myString ---> ${Number.parseFloat(myString)}`)    // removes 'assc' and returns the floating point number


// toFixed: this method formats a number according to how many decimal points you provide as the parameter.

console.log(`toFixed is being called on myNumber -> ${myNumber.toFixed(2)}`)    // 43.00
console.log(`toFixed is being called on myFloat -> ${myFloat.toFixed(4)}`)      // 43.0100
let strMyFloat = myFloat.toFixed(4)     // toFixed returns string data, and not number data
console.log(typeof strMyFloat)          // this is "string"

// console.log(`toFixed is being called on myString -> ${myString.toFixed(3)}`)     // method toFixed does not exist on this type
// console.log(`toFixed is being called on strMyNumber -> ${strMyNumber.toFixed(2)}`)   // and also on this type, because they are not int or float

// parseInt: this method parses a string argument and returns an integer,
// this method removes non-numeric data and returns the numeric value

console.log(`calling Number.parseInt on myString ---> ${Number.parseInt(myString)}`)    // this returns 45


// toString: return a string representing the number

console.log(`converting myFloat to a string to see the string result ---->>> ${myFloat.toString()} this is also the typeof --->> ${typeof myFloat.toString()}`)


// isNaN: determines whether a value is NaN or not.
console.log(isNaN("tarokh"))        // this will be true, because tarokh is not a number


console.log(Number.MIN_VALUE)   // The smallest positive representable number - that is, the positive number closest to zero, without actually being zero
console.log(Number.MAX_VALUE)   // The largest positive representable number.


// Special Values representing negative infinity and infinity - returned on overflow
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)


// determine whether the passed value is a finite number
console.log(Number.isFinite(Number.POSITIVE_INFINITY)) 
