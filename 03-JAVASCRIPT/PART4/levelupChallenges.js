/*
1. Write a `for` loop that loops through the array 
`["green tea","black tea","chai","oolong tea"]` and 
stops the loop when it finds `chai`.
    Store all teas before `chai` in a new array named
    `selectedTeas`.
*/
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
    if (teas[i] === "chai") {
        break;
    }
    selectedTeas.push(teas[i]);

}
console.log(selectedTeas);

/*
2. Write a `for` loop that llops through the array 
`["London","New York","Paris","Berlin"]` and skips
`"Paris"`.
    Store the other cities in a new array nameed
    `visitedCities`.
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let j = 0; j < cities.length; j++) {
    if (cities[j] === "Paris" || cities[j] === "paris") {
        continue;
    }
    visitedCities.push(cities[j]);
}
console.log(visitedCities);

/*
3. Use a `for-of` loop to iterate through the array 
`[1,2,3,4,5]` and stops when the number `4` is found.
    Store all numbers before `4` in a new array named
    `smallNumbers`
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
    if (num === 4) {
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);

/*
4. Write a `for-of` loop to iterate through the array
`["chai","black tea","green tea","herbal tea"]` and skip
`"herbal tea"`.
    Store the other teas  in an array named 
    `preferredTeas`.
*/

let teaTypes = ["chai", "black tea", "green tea", "herbal tea"];
let preferredTeas = [];

for (const tea of teaTypes) {
    if (tea === "herbal tea") {
        continue;
    }
    preferredTeas.push(tea);
}
console.log(preferredTeas);

/*
5. Use a `for-in` loop to loop through an object
containing city populations.
    Stop the loop when the population of `"Berlin"` is 
    found and store all previous cities' populations
    in a new object named `cityPopulations`.

    let cityPopulations = {
        "London": 8900000,
        "New York": 8400000,
        "Paris": 2200000,
        "Berlin": 3500000
    };
*/

let citiesPopulations = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

let cityNewPopulations = {};
for (const city in citiesPopulations) {
    if (city === "Berlin") {
        break;
    }
    cityNewPopulations[city] = citiesPopulations[city];
}

console.log(cityNewPopulations);


/*
6. Use a `for-in` loop to loop through an object
containing city populations.
    Skip the city with a population below 3 million and
    and store the rest in a new object named `largeCities`.

    let worldCities = {
        "Sydney": 5000000,
        "Tokyo": 9000000,
        "Paris": 3500000,
        "Berlin": 2200000
    };
*/


let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Paris": 3500000,
    "Berlin": 2200000
};
let largeCities = {};
for (const city in worldCities) {
    if (worldCities[city] < 3000000) {
        continue;
    }
    largeCities[city] = worldCities[city];
}
console.log(largeCities);

/*
7. Write a `forEach`  loop that viterates through the array
`["green tea","earl gray","chai","oolong tea"]`.
    Stop the loop when `"chai"` is found and store all
previous teas in a new array named `availableTeas`.
*/

let teaList = ["green tea", "earl gray", "chai", "oolong tea"];
let availableTeas = [];

teaList.forEach(function (tea) {
    if (tea === "chai") {
        return; // This will exit the current iteration, 
        // but forEach will continue with the next one

    }
    availableTeas.push(tea);
});

console.log(availableTeas);


/*
8. Write a `forEach` loop that iterates through the array
`["Sydney","New York","Paris","Berlin"]`.
    Skip `"Sydney"` and store the other cities in a new
    array named `traveledCities`.
*/

let myWorldNames = ["Sydney", "New York", "Paris", "Berlin"];
let traveledCities = [];

myWorldNames.forEach((city) => {
    if (city === "Sydney") {
        return;
    }
    traveledCities.push(city);
});
console.log(traveledCities);

/*
9. Write a `for` loop that iterates through the array
`[2,5,7,9]`.
    Skip the value `7` and multiply the rest by 2.Store
    the results in a new array named `doubledNumbers`.
*/

let myNumbers = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] === 7) {
        continue;
    }
    doubledNumbers.push(myNumbers[i] * 2);
}
console.log(doubledNumbers);

/*
10. Use  a `for-of` loop to iterate through the array
`["green tea","black tea","chai","jasmine tea",
"herbal tea"]`.
    and stop when the length of the current tea name is
    greater than 10.
    Store all teas iterated over in an array named
    `shortTeas`.
*/

let teaNames = ["green tea", "black tea", "chai", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of teaNames) {
    if (tea.length > 10) {
        break;
    }
    shortTeas.push(tea);
}
console.log(shortTeas);