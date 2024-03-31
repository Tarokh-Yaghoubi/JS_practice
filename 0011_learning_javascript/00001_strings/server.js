
let myvar = "tarokh"
let othervar = "tarokh and shahrokh"

// length is a property, not a method, that's why it does not have parantheses
console.log(myvar.length)
console.log("this is a quote".length)

// character at some position 
console.log(myvar.charAt(3)) // this would give 'o'

// FINDINT THE POSITION OF A SUBSTRING IN A STRING
// return the position that the string starts in the variable 
console.log(myvar.indexOf("okh"))   // this will return '3', because the first character of the word 'okh' has started at position 3.
console.log(myvar.indexOf("ta"))    // this will return 0

// lastIndexOf: this method returns the position of the last occurrence of tha character
console.log(othervar.lastIndexOf("okh"))    // this will return 16 - because the last 'okh' was at position 16

// Slice Method
// this method accepts start and end position params and returns the characters from the start position to the ending position 

let sliced = othervar.slice(1, 6)
console.log(`the length of the sliced othervar is -> ${sliced.length}`)
console.log(othervar.slice(1, 6))

// NOTE: if the ending position is not provided, the slice method will return the characters from the start position, to the end of the string 
console.log(othervar.slice(3))

// NOTE: if the ending position parameter is less than the starting position parameter, nothing will happen.
// console.log(othervar.slice(4, 2))    // nothing will be returned here.

// NOTE: if the ending position parameter is one more than the starting position parameter, only the character at the starting position will be returned.
// because the slice method will not return the character at the ending position.
console.log(`ONLY 'T' WILL BE RETURNED HERE ---->>>> ${othervar.slice(0, 1)}`)   // only 't' will be returned



// toUpperCase and toLowerCase methods in JS

// toUpperCase: converts the whole string from upper-case to lower-case 
// toLowerCase: converts the whole string from lower-case to upper-case

let upperCaseOtherVar = othervar.toUpperCase()
let myUpperCaseStr = "WE ARE TRYING TO BE NORMAL PROGRAMMERS AND HAVE HAPPY LIVES"
let myStrToLower = myUpperCaseStr.toLowerCase()

console.log(`upper case of othervar is -> ${upperCaseOtherVar}`)
console.log(`my string converted to LOWER CASE is ------>> ${myStrToLower}`)


// includes: returns 'true' if the specified character 'or group of characters' exist in the string, else, it will return 'false'.

let doesExists = othervar.includes("tarokh")
console.log(`the value of doesExists is -> ${doesExists}, its type is -> ${typeof doesExists}`)
console.log(othervar.includes("o")) // this will also be true, because we have the letter 'o' inside the string
console.log(othervar.includes(myUpperCaseStr))  // this will be false, because othervar does not contain myUpperCaseStr


// split method: this method will split the string whenever the character we provide occurs in the string, and returns the result like an array.
// example:

let splitResult = othervar.split(" ")   // split when whitespace occurs
console.log(splitResult)    // ["tarokh", "and", "shahrokh"]

// if we put empty quotes inside the split function the function will return every character as a separate string in the resulting array.

let emptyStrSplitRes = othervar.split("")
console.log(emptyStrSplitRes)


console.log("Tarokh,Mohammad,Sarah,Naser,Nika".split(","))  // split when a comma occurs, and return the result as an array of the names


// Check to see if the string startsWith or endsWith a specific substring or not

console.log(othervar.startsWith("tarokh"))  // this is true
console.log(othervar.startsWith("t"))   // this is true
console.log(othervar.startsWith("shahrokh"))    // this is false
console.log(othervar.endsWith("tarokh"))    // this is false
console.log(othervar.endsWith("shahrokh"))  // this is true



// UPDATING PARTS OF A STRING - replace/replaceAll methods in JS

let my_browser = "mozilla"
let my_string = "To be or not to be"

console.log(my_browser.replace("moz", "poz"))   // pozilla
console.log(my_string.replaceAll("be", "bad"))  // To bad or not to bad

