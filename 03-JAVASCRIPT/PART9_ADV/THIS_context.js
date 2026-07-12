const Person = {
    name: "Hitesh",
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}

Person.greet();

const greetFunction = Person.greet;
greetFunction();

const boundGreet = Person.greet.bind({ name: "John" });
boundGreet();

//bind,call and apply