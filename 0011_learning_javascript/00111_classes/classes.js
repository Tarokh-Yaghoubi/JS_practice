
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

// The result of this definition is the same.
// But are classes a bunch of syntactic sugars ?
// Still, there are important differences:

// 1 - a function created by 'class' is labelled by a special internal property [[IsClassConstructor]]:
// true. So it is not entirely the same as creating it manually
// The language checks for that property in a variety of places. For example, unline regular functions, it must be called with new:

class Student {
    constructor(student_name) {
        this.student_name = student_name;
    }
    
    getName() {
        return this.student_name;
    }
}

console.log(typeof Student);
console.log(Student)
// Student();      // Error: Class constructor Student cannot be invoked without 'new'

// 2 - Classes always 'use strict'. All code inside the class construct is automatically in strict mode.


// CLASS EXPRESSIONS

let Programmer = class {
    constructor(language) {
        this.programming_language = language;
    }


    ['echo' + 'Lang']() {       // computed method
        console.log(this.programming_language);
    }

    getLang() {
        console.log(`The programming language used by this user is --->>> ${this.programming_language}`);
    }

}

// if a class expression has a name, it is only visible inside the class.

new Programmer("C").getLang();  // this works fine
new Programmer("JavaScript").echoLang();

// we can even make classes dynamically like this:

function makeClass(quote) {
    // declare a class and return it 

    return class {
        echo() {
            console.log(`The quote is:\n${quote}`)
        }
    }
}

let MakeClass = makeClass("the only true wisdom is in knowing you know nothing\nThe more I know, the more I realies I know nothing.")
let user4 = new MakeClass();
user4.echo();



// GETTERS AND SETTERS
// just like literal objects, classes may include getters/setters

class Credentials {
    constructor(username, password) {
        // invokes the setter
        this.username = username;       // this.username is invoking the setter method
        this.password = password;       // this.password is invoking the setter method
    }

    set username(value) {
        this._username = value;
    }

    get username() {
        return this._username;
    }

    set password(value) {
        if (value.language < 4) {
            console.log("password is too short");
            return;
        }

        this._password = value;
    }

    get password() {
        return this._password;
    }

}

let cred = new Credentials("tarokh", "tarokh0010");
console.log(cred.username);
console.log(cred.password);

// _ (UNDER_SCORE) is a naming convention in JavaScript and many other languages that indicates that a property is
// intended to be private or internal to a class and developers should not directly access or modify these properties
// from outside the class.

// "Class fields" is a syntax that allows to add any properties to the class
// This is not supported in old-browsers

class AddProp {
    first_prop = "jesus"
    second_prop = "carrot"

    echoFirst() {
        console.log(this.first_prop);
    }

    echoSecond() {
        console.log(this.second_prop);
    }
}
// The important difference of class fields is that they are set on individual objects, not User.prototype:

let addProp = new AddProp();
console.log(addProp.first_prop);                // this is jesus
console.log(AddProp.prototype.first_prop);      // this is undefined


// Functions in JavaScript have a dynamic 'this'.
// If an object method is passed around and called in another context, "this" wont be a reference to its object anymore.

class Button {
    constructor(value) {
        this.value = value;
    }

    click() {
        console.log(this.value);
    }
}

let button = new Button("ShutDown");

// setTimeout(button.click(), 1000);   // undefined, because 'this' is lost.
// this problem is called "losing this"

// There are two approaches to fixing it:
// 1 - pass a wrapper-function:

// setTimeout(() => button.click(), 1000).

// 2 - Bind the method to object. Class fields provide another syntax

class Button1 {
    constructor(value) {
        this.value = value;
    }

    click = () => {
        console.log(this.value)
    }
}

let but = new Button1("ByeBye");
setTimeout(but.click, 1000);


// The class field click = () => {...} is created on a per-object basis
// There is a separate function for each Button object, with "this" inside it referencing that object.
// we can pass but.click around anywhere, and the value of "this" will always be correct.


// THAT IS ESPECIALLY USEFUL IN BROWSER ENVIRONMENT, FOR EVENT LISTENERS.


class BankAccount {
    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposite ${amount} into ${this.accountHolder}'s account, Current Balance: ${this.balance}`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdraw ${amount} from ${this.accountHolder}'s account, Current Balance: ${this.balance}`);
        } else {
            console.log(`Insufficient balance. Current Balance: ${this.balance}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    getAccountHolder() {
        return this.accountHolder;
    }

    setAccountHolder(firstname) {
        this.accountHolder = firstname;
        console.log(`account holders name updated to ${this.accountHolder}`)
    }

}

let account = new BankAccount("Tarokh", 10000);
console.log(account.getBalance());
console.log(account.getAccountHolder());
account.deposit(200);
account.withdraw(400);

class BankAccount2 {
    constructor(accountNumber, accountHolderName, balance = 0) {
        this._accountNumber = accountNumber
        this._accountHolderName = accountHolderName
        this._balance = balance
    }

    // getter and setter for account number

    get accountNumber() {
        return this._accountNumber
    }

    set accountNumber(value) {
        this._accountNumber = value
    }

    // Getter and setter for account holder name

    get accountHolderName() {
        return this._accountHolderName
    }

    set accountHolderName(value) {
        this._accountHolderName = value
    }

    // Getter and setter for balance

    get balance() {
        return this._balance
    }

    set balance(value) {
        this._balance = value
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount
            console.log(`Deposit of $${amount} successful, Current Balance ${this._balance}`)
        } else {
            console.log("Invalid amount for deposit")
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount
            console.log(`Withdrawal of $${amount} successful, Current Balance ${this._balance}`)
        } else {
            console.log("Insufficient funds or invalid amount for withdrawal")
        }
    }

    displayInfo() {
        console.log(`Account Number ${this._accountNumber}`)
        console.log(`Account Holder Name ${this._accountHolderName}`)
        console.log(`Balance ${this._balance}`)
    }
}

const account1 = new BankAccount2(1, "Tarokh", 20000)
account1.displayInfo()
account1.deposit(1000)
account1.displayInfo()
account1.withdraw(100)
account1.displayInfo()
