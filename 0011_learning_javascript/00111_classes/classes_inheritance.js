
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
