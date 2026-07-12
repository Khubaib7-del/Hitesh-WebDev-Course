/*
!. Write a `while` loop that calculates the sum of all
numbers from 1 to 5 and stores the result in a variable
named `sum`.
*/
let sum = 0;
let i = 1;

while (i <= 5) {
    sum += i;
    i++;
}

console.log(sum)

/*
2. Write a `while` loop that counts doen from 1 to 5 and 
stores the number ina na array named `countdown`.
*/

let countdown = [];
let j = 5;

while (j > 0) {
    countdown.push(j);
    j--;
}
console.log(countdown);
/*
3. Write a `do while` loop that prompts the user to enter
their favourite tea unitll they enter `"stop"`.
    Store each tea type in an array named `teaCollections.
*/
let teaCollections = [];
let tesa;
do {
    tea = prompt("Enter your favourite tea (type 'stop' to end):");
    if (tea !== "stop") {
        teaCollections.push(tea);
    }
} while (tea !== "stop");
/*
4. Write a `do while` loop that adds numbers from 1 to 3 
and stores the result in a varaiable named `total`.
*/
let total = 0;
let k = 1;
do {
    total += k;
    k++;
} while (k <= 3);
console.log(total);

/*
5. Write a `for` loop that multiplies each element in the 
array `[2,4,6]` by 2 an dstores the result in a new 
array named `multipliedNumbers`.  
*/

let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let l = 0; l < numbers.length; l++) {
    //     takeNumber=numbers[l]*2;
    //     multipliedNumbers.push(takeNumber);
    multipliedNumbers.push(numbers[l] * 2);
}
console.log(multipliedNumbers);

/*
6. Write a `for` loop that lists all the cities int the
array `["Paris","New York","Tokyo","London"]` and
stores each city in a new array named `cityList`.
*/

let cityList = [];
let cities = ["Paris", "New York", "Tokyo", "London"];

for (let c=0;c<cities.length;c++){
    // cityList.push(cities[c]);
    const myCity=cities[c];
    cityList.push(myCity);
}
console.log(cityList);