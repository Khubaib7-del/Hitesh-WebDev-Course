/*
1.Declare an array named `teaflavours` that contains
the strings `"green tea"`,`"black tea"`, and `"oolong 
tea"`.
    Acess the first element of teh array and store it 
    in a variable named `firstTea`. 
*/

let teaflavours = ["green tea", "black tea", "oolong tea"];
// let teafl=new Array("green tea", "black tea", "oolong tea");
let firstTea = teaflavours[0];

/*
2.Declare an array named `cities` containing 
`"London"`,`"Tokyo"`,`"Paris"`,and `"New York"`.
    Access the third element of the array and store it in a
    variable named `favouriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
let favouriteCity = cities[2];

/*
3.You have an array named `teatypes` containing
`"herbal tea"`,`"masala chai"`,`"white tea"`.
    Change the second element of the array to `"jasmine tea"`.
*/
let teatypes = ["herbal tea", "masala chai", "white tea"];
teatypes[1] = "jasmine tea";

/*
4.Declare an array named `CitiesVisited` containing
`"Mumbai"`,`"Sydney"`.
    Add `"Berlin"` to the array using the `push()` method.
*/
let CitiesVisited = ["Mumbai", "Sydney"];
CitiesVisited.push("Berlin");
// CitiesVisited[2]= "Berlin";


/*
5. you have an array named `teaOrders` with `"chai"`,
`iced tea`,`matcha`and `"earl gray"`.
    Remove the last element of the array using the `pop()` 
    method and store it in a variable named `lastOrder`.
*/
let teaOrders = ["chai", "iced tea", "matcha", "earl gray"];
let lastOrder = teaOrders.pop();
// let lastOrder=teaOrders[teaOrders.length-1];
// teaOrders.length=teaOrders.length-1;

/*
6. You have array named `popularTeas` containing 
`"green tea"`,`"oolong tea"`,`"chai"`.
    Create  a soft copy of this array named 
    `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas=popularTeas;

/*
7. You have an array named `TopCities` containing
`"New York"`,`"Singapore"`,`"Berlin"`.
    Create a hard copy of this array named 
    `hardCopyCities` .
*/

let TopCities = ["New York", "Singapore", "Berlin"];
let hardCopyCities = [...TopCities];
// let hardCopyCities = TopCities.slice();

/*
8. You have an array named `europeanCities` containing
`"Paris"`and `"Rome"`and `asianCities` containing
`"Tokyo"` and `"Bangkok"`.
    Merge these two arrays into a new array named 
    `worldCities` .
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = [...europeanCities, ...asianCities];
// let worldCities=europeanCities.concat(asianCities);

/*
9. You have an array named `teaMenu` containing
`"green tea"`,`"masala chai"`,`"earl gray"`,`"oolong tea"`.
    Find the length of the array and store it in a 
    variable named `menuLength`.
*/

let teaMenu = ["green tea", "masala chai", "earl gray", "oolong tea"];
let menuLength = teaMenu.length;

/*
10. You have an array named `cityBucketList` containing
`"Kyoto"`,`"Cape Town"`,`"London"`and `"Vancouver"`.
    Check if `"London"` is in the array and store the 
    result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "Cape Town", "London", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");