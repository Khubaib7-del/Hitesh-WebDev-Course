/*
1. Write a function named `makeTea` that takes one 
parameter, `TypeOfTea`, and returns a string like 
`"Making green Tea"` when called with the `"green tea"`.
Store the result in a variable named `taeOrder`.
*/

function makeTea(TypeOfTeaTYPE)
{
    return `Making ${TypeOfTeaTYPE}`;
}

let teaOrder=makeTea("lemon tea");
// console.log(teaOrder);

/*
2. Createv a function named `orderTea` that takes one
parameter, `teaType`. Inside this function, create
another function named `confirmOrder` that returns a 
message like `"Order Confirmed for chai"`.
Call `confirmOrder` fro  within `orderTea` and return the
result.
*/

function orderTea(teaType)
{
    function confirmOrder()
    {
        return `Order Confirmed for ${teaType}`;
    }
    return confirmOrder();
}

let orderconfirmation=orderTea("chai");
// console.log(orderconfirmation);

/*
3. Write an arrow function named `calculateTotal` that
takes two parameters: `price` and `quantity`. The
function should return the total cost by multiplying 
the `price` and `quantity`.
*/

const calculateTotal=(price,quantity)=>{
    return price*quantity;
}

let totalCost=calculateTotal(499, 100);
console.log(totalCost);

/*
4. Write a function named `proceesTeaOrder` that takes
another function, `makeTea`, as a parameter and calls it
with the argument `"earl gray"`.
Return the result of calling `makeTea`.
*/

function makeTea(TypeOfTea)
{
    return `Make Tea: ${TypeOfTea}`;
}

function processTeaOrder(Teafunction)
{
    return Teafunction("earl gray");
}

let order=processTeaOrder(makeTea);
console.log(order);

/*
5. Write a function named `createTeaMaker` that returns
another function.The returned function should take one
parameter, `teaType`, and return a message like `"Making 
green tea"`
Store the returned function in a variable named
`teaMaker` and call it with `"green tea"`.
*/


function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`;
    }
}

let teaMaker=createTeaMaker();
let result=teaMaker("green tea");
console.log(result);