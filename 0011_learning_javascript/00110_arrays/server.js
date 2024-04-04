
// there are two syntaxes for creating an array:

let arr2 = new Array();
let arr = [];

// Almost all the time, the second syntax is used.

arr = ["tarokh", "johny", "Tom", "sarah"];
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[arr.length - 1])    // accessing the last index of the array
// arr[-1] -> this is not supported in JavaScript.

arr[0] = "Jacob";   // this will change the first elements value 
arr[6] = "tarokh";  // [ 'Jacob', 'johny', 'Tom', 'sarah', <2 empty items>, 'tarokh' ] -> this would be the result after doing this
console.log(arr);

// an array can store elements of any type:

arr = []    // re-define arr

arr = ['Apple', {name: "tarokh", username: "tarokh", password: "iambatman0010"}, true, (msg) => { console.log(msg) }, false];
arr[3]("tarokh")    // here, the third element is an arrow-function
if (arr[1].username == "tarokh")
    console.log("the username is tarokh")
else
    console.log("the username is not tarokh")


    // you can access the last element of the array using at() more easily
    // like this

// these two are doing the same thing, second one is more human-readable and not cryptic
console.log(arr[arr.length - 1])
console.log(arr.at(-1))

arr2 = ["python", "JavaScript", "Ruby", "C"]
arr2.push("Rust")   // adds this to the last index of the array
console.log(arr2)
arr2.shift()        // removes the first element of the array and returns it (so you can log it), in a way that the second index becomes the first.
console.log(arr2)


// pop:  removes an element from the end
// push: adds an element to the end

console.log(arr2.pop())     // removes the last index and logs it

// unshift: this will add the element to the first of the array
arr2.unshift("C#", "C++")       // adds C# and C++ to the first of the array
console.log(arr2)


// shift and unshift are slow, because after updating the array, they also have to update the length property.
// MORE ARRAY LENGHT, MORE IN-MEMORY OPERATIONS, MORE TIME IT TAKES.

let arr3 = ["Lamborghini", "Benz", "Audi", "Alfa"]

// old-way loop

for (let i = 0; i < arr3.length; ++i)
    console.log(arr3.at(i))

// another form of loop in JS

for (let char of arr3)
    console.log(char)


// the for...of loop does not give access to the number of element, just its value.
// for having access to the number of elements in the array, you can use the for...in loop.
console.log("\n\n\n\n")

for (let char in arr3)
    console.log(`${arr3.at(char)} IS AT LOCATION ${char}`)



// GENERALLY WE SHOULD NOT USE FOR...IN FOR ARRAYS
// The for..in loop iterates over all properties, not only the numeric ones.
/**
 *      There are so called array-like objects in the browser and in other environments, that look like arrays.
 *      That is, they have length and indexes properties. But they may also have other non-numeric properties
 *      and methods, which we usually do not need. The for...in loop will list them though. So if we need to work
 *      with array-like objects, then these 'extra' properties can become a problem.
 */
// ALSO
/**
 *      The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower.
 * 
 */


// length property: this property automatically updates when we add something to the array.
// also its value is not the count of values we have in the array, but the greatest numeric index plus one.
// if we decrease the value of length ourselves, it will truncate the array, and if we undo it, the values will not be back!

// let arr = new Array(3)   -> the length value is 3 right now, but the array is empty so the arr[2] is undefined right now.

