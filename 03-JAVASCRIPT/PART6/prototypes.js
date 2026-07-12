let computer={cpu:12};
let lenovo={
    screen:"HD",
    __proto__:computer
};
let tomHardware={__proto__:lenovo};

// console.log(`computer`,tomHardware.__proto__);


let genericCar ={tyres:4};

let tesla={
    driver:"AI"
}

Object.setPrototypeOf(tesla,genericCar);

// console.log(`tesla`,tesla.tyres);

console.log(`tesla`,Object.getPrototypeOf(tesla));