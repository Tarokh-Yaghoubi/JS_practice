
// class inheritance is a way for one class to extend another class.

// so we can create new functionality on top of the existing.

// THE "extends" KEYWORD

class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} is running this fast ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`The ${this.name} is stopped, the speed is ${this.speed}`);
    }
}

let animal = new Animal("Wolf")
animal.run(60);
animal.stop();


// NOW, we wanna create a class called Rabbit, and as the Rabbits are Animals, we wanna create the Rabbit class based on the Animal class.
// Rabbit class must have access to Animal methods. So Rabbits can  do what "generic" animals can do.

// class Child extends Parent

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides !`)
    }

}

let rabbit = new Rabbit("Rabbit")
rabbit.hide()
rabbit.run(50)
rabbit.stop()

// Object of Rabbit class have access to both Rabbit methods such as hide(). and Animal methods such as run().
// Internally, "extends" keyword works using the good old prototype mechanics. It sets Rabbit.prototype.
// [[ Prototype ]] to Animal.prototype. So if a method is not found in Rabbit.prototype, JavaScript takes it
// from Animal.prototype.

// Class syntax allows you to specify not just a class, but any expressions after extends.

function f(phrase) {
    return class {
        echo() {
            console.log(phrase)
        }
    }
}

class User extends f("If you do not know the answer, the answer is no") {}

new User().echo()

// Here, class User, inherits from the result of f("something").


// OVERRIDING A METHOD

// By default, all methods that are not specified in class Rabbit are taken directly "as they are" from class Animal.

// But if we specify our own method in Rabbit, such as stop(), then it will be used instead
// an example with tarokh and people. 

class People {
    constructor(firstname, lastname) {
        this._firstname = firstname;
        this._lastname = lastname;
    }

    set firstname(value) {
        this._firstname = value
    }

    get firstname() {
        return this._firstname
    }

    set lastname(value) {
        this._lastname = value
    }

    get lastname() {
        return this._lastname
    }

    walk() {
        console.log(`user ${this._firstname} is walking`)
    }

    stop() {
        console.log(`user ${this._firstname} stopped walking`)
    }
}

// Usually, however, we do not want to totally replace a parent method, but rather to build on top of it to tweak or extend its functionality.
// we do something in our method, but call the parent method before/after it or in the process.

// Classes provide "super" keyword for that
// super.method(...) to call a parent method .
// super(...) to call a parent constructor (inside our constructor only)

class Tarokh extends People {

    sit() {
        console.log(`user ${this._firstname} sat on the floor`)
    }

    // calling stop of People, and adding more functionality.
    stop() {
        super.stop()
        console.log(`The stop in class Tarokh does more things, such as sitting down`)
        this.sit()
    }
}

let me = new Tarokh("Tarokh", "Yaghoubi");
me.stop();

// Now Tarokh has the stop method that calls the parent super.stop() in the process


// OVERRIDING CONSTRUCTOR

// Until now, the child class did not have its own constructor.

// if a class extends another class and has no constructor, then the following empty constructor is generated

function makeClass() {
    class Tarokh extends People {

        // generating for extending classes without own constructors
        constructor(...args) {
            super(...args)
        }
    }

    return Tarokh;
}

// let Tarokh1 = makeClass()
// let tarokh2 = new Tarokh1("tarokh", "jacobi");
// console.log(`the lastname of the class returned from the Function is ---->>> ${tarokh2.lastname}`)

function makeClassOwnConstructor() {
    class Tarokh extends People {
        constructor(firstname, lastname, programmingLang) {
            super(firstname, lastname);
            this._lang = programmingLang;
        }

        set programmingLang(value) {
            this._lang = value;
        }

        get programmingLang() {
            return this._lang;
        }

        display() {
            console.log(`firstname -> ${thi._firstname}\tlastname -> ${this._lastname}\tprogramming language -> ${this._lang}`)
        }
    }

    return Tarokh;
}

let Tarokh3 = makeClassOwnConstructor();
let tarokh4 = new Tarokh3("John", "Smith", "Pascal")
tarokh4.walk();
console.log(`firstname and programming language is ->  ${tarokh4.firstname} ${tarokh4.programmingLang}`)


// We can override not only methods, but also class fields.

class Cats {
    name = "cat"
    color = "brown"

    constructor() {
        console.log(this.name)
    }
}

class Garphield extends Cats {
    // this will not override the property "name" in Cats
    name = "Garphield"

}


// name is still cats 
new Garphield()


// but when we use methods ...

class Dogs {
    name = "animal"
    color = "any"

    showName() {
        console.log(this.name)
    }

    constructor() {
        this.showName()
    }
}

class American extends Dogs {
    showName() {
        console.log("Kevin")
    }
}

new Dogs();
new American();
// now American class will print Kevin  


