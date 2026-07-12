//Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance.valueOf());
// console.log(typeof(balance));
// console.log(typeof(anotherBalance));

//boolean

let isActive = true;
let isReallyActive = new Boolean(true);

// console.log(isActive);
// console.log(isReallyActive.valueOf());
// console.log(typeof(isActive));
// console.log(typeof(isReallyActive));

//null and undefined

let firstname;
// console.log(firstname);// undefined
let lastname = null;
// console.log(lastname);// null
// console.log(middlename);// not defined (error)

//String

let myString = "hello";
let myString2 = 'Hola';
let username = 'hitesh';

let oldGreet = myString + " " + 'hitesh';
// console.log(oldGreet);

let greetMessage = `Hello ${username} !`;//string interpolation
let demoOne=`Value is ${2*2}`;
// console.log(demoOne);

// Symbols
let sm1=Symbol("hitesh");
let sm2=Symbol("hitesh");

console.log(sm1==sm2);//false

