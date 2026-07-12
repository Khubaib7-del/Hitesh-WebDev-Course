function Person(name,age){
    this.Name=name;
    this.Age=age;
}

function Car(make,model){
    this.make=make;
    this.model=model;   
}

let myCar=new Car("Toyota","Corolla");
// console.log(myCar);

let myNewCar=new Car("Honda","Civic");
// console.log(myNewCar);

function Tea(type){
    this.type=type;
    this.describe=function(){
        console.log(`This is a ${this.type} tea.`);
    }
}

let greenTea=new Tea("Green");
// greenTea.describe(); // This is a Green tea.

function Animal(species){
    this.species=species;
}

Animal.prototype.sound=function(){
    return `The ${this.species} makes a sound.`;
}

let cat=new Animal("cat");
// console.log(cat.sound()); // The Dog makes a sound.

function Drink(name){
    if(!new.target){
        throw new Error
        ("Must use 'new' to create an instance of Drink");   
    }
    this.name=name;
}

let coffee=new Drink("Coffee");
console.log(coffee.name); // Coffee

let tea=Drink("Tea"); // Error: Must use 'new' to create an instance of Drink   