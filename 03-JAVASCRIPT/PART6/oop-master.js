let car = {
    make: "BMW",
    model: "X5",
    year: 2020,
    start: function () {
        return `Make: ${this.make}, Model: ${this.model},
        Year: ${this.year}`;
    }
}

// console.log(car.start());

function Person(name, age) {
    this.name = name;
    this.age = age;
}


let john = new Person("John", 30);
// console.log(john.name);


function Animal(type) {
    this.type = type;
}

Animal.prototype.speak = function () {
    return `The ${this.type} makes a sound.`;
}

Array.prototype.hitesh = function () {
    return `Custom method ${this}`;
}

let myArray = [1, 2, 3,];
// console.log(myArray.hitesh());
let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.hitesh());

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        return `Vehicle Make: ${this.make},
        Model: ${this.model}`;
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make} : This is an 
        inheritance example.`
    }
}

let myCar = new Car("Toyota", "Camry");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Honda", "Civic");
// console.log(vehOne); //undefined when new not used

//Encapsulation

class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance() {
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount();
// console.log(account.getBalance());


//Abstraction

class CoffeMachine {
    start() {
        //call DB
        //filter Value
        return `Making coffee...`;
    }

    brewCoffe() {
        //complex calculations
        return `Brewing coffee...`;
    }

    pressStartButton() {
        let msg1 = this.start();
        let msg2 = this.brewCoffe();
        return `${msg1}  ${msg2}`;
    }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffe());
// console.log(myMachine.pressStartButton());


//Polymorphism

class Bird {
    fly() {
        return `Flying...`;
    }
}

class Penguin extends Bird {
    fly() {
        return `Cannot fly, but can swim...`;
    }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());



//static method
// static method is a method that belongs 
// to the class itself rather than an instance
// of the class. It can be called without creating
// an instance of the class.

class Calculator {
    static add(a, b) {
        return a + b;
    }
}

let miniCalc = new Calculator();
// console.log(miniCalc.add(2,3)); 
// Error: miniCalc.add is not a function

// console.log(Calculator.add(2,3)); //5
//Correct way to call static method is using the
//  class name, not an instance of the class.



// Getters and Setters

class Employee {
    #salary;

    constructor(name, salary) {
        if(salary<0)
        {
            throw new Error("Salary cannot be negative.");
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary() {
        return this.#salary;
    }

    set salary(newSalary) {
        if (newSalary > 0) {
            this.#salary = newSalary;
        } else {
            console.log("Invalid salary amount.");
        }
    }
}

let emp1 = new Employee("Alice", 50000);
// console.log(emp1.salary); //50000 without getter setter
console.log(emp1.salary); //50000 with getter
emp1.salary = 60000; //using setter to update salary
console.log(emp1.salary);
