
// OOP concepts

// Object-Oriented aims to implement real-world entities like inheritance, hiding, polymorphism, etc in programming.
// The main aim of OOP is to bind together the data and the functions that operate on them so that no other part
// of the code can access this data except the function.

// In practice we often need to create many objects of the same kind, like users, goods, whatever...

// as we know, this is possible with the "new function" syntax in JavaScript.
// But also, there a more advanced 'class' construct, that introduces great new features which are useful for object-oriented programming.

// basic class syntax:

class myClass {
    // class methods
    constructor() {
        // something
    }

    myFirstMethod() {
        console.log("this is the first method.")
    }

    mySecondMethod() {
        console.log("I am the second method in the class")
    }
}

// then use new myClass to create a new object with all the listed methods.
// the 'constructor method' is called automatically by "new", so we can initialize the object there.

class User {
    constructor(firstname) {
        this.firstname = firstname
    }

    greet() {
        console.log(`Hello ${this.firstname}`)
    }
}

let user = new User("tarokh")
user.greet();

// when new User("tarokh") is called:
// - a new object is created
// - the constructor runs with the given argument and assigns it to this.firstname

// ... then we can call the object methods, such as user.greet() or anything else that we have implemented.

class Calculation {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }

    calc_sum() {
        this.res = this.first + this.second;
        return this.res;
    }

    calc_sub() {
        this.res = this.first - this.second;
        return this.res;
    }

    calc_div() {
        this.res = this.first / this.second;
        return this.res;
    }

    calc_mul() {
        this.res = this.first * this.second;
        return this.res;
    }
}

let calculator = new Calculation(34, 54);
let sub = calculator.calc_sub();
console.log(`the result of the subtraction done by the class is ${sub}`)

// So what exactly is a class ? That is not an entirely new language-level entity, as someone might think.
// In JavaScript, a class is a kind of function !

console.log(`type of class Calculation is [[[[ ${typeof Calculation} ]]]]`)

// class User is :
// creating a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method
// so it will be assumed empty if we do not write such method.
// and stores the class methods, such as greet() or calc_mul() in User.prototype.

// after new User is called and an object is created, when we call its method, it is taken from the prototype.

// Here is the proof:

class User1 {
    constructor(username) {
        this.username = username;
    }

    getUsername() {
        console.log(`username is ${this.username}`)
    }
}

// class is a function
console.log(typeof User1);      // function :)


console.log(User1 === User1.prototype.constructor);     // true

User1.prototype.getUsername()       // this is exactly that class method...

// there are exactly two methods in the prototype: constructor and getUsername
console.log(Object.getOwnPropertyNames(User1.prototype)); 


// rewriting class User in pure functions

function Users(name) {
    this.name = name;

}

// a function prototype has "constructor" property by default.
// so we do not need to create it.

// 2 - add the method to prototype

Users.prototype.greet = function () {
    console.log(`Greetings ${this.name}`)

}

let user2 = new Users("tarokh")
user2.greet();

