
// Functions

// Methods = built-in functions

// functions create reusable code and that is one of the main reasons they are used

function sum() {
    return 2 + 3
}

function getUsernameFromEmail(email) {
    return email.slice(0, email.indexOf("@"))
}


// doing the same thing using a variable function
const variableFunction = function(email) {
    return email.slice(0, email.indexOf("@"))
}

let res = sum()
console.log(`the value of res is -> ${res}`)
res = getUsernameFromEmail("tarokh@gmail.com")
console.log(`the username is -> [ ${res} ] BY hes email`)
res = variableFunction("tarokhyaghoubi@protonmail.com")
console.log(`username using the variable function is -> ${res}`)

// arrow functions 

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

let propCase = toProperCase("TAROKH")
console.log(`the proper case of name tarokh is -> ${propCase}`)

