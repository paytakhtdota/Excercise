'use strict'
// for finding a single number is a Prime number.
function isPrime(num) {
    let counter = 0;
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            counter++;
        }
    }
    if (counter == 2) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPrime(11));

// for finding Prime Numbers between range of two number.
const primeFinder = (firstNum, secNum) => {
    let primes = [];
    for (firstNum; firstNum <= secNum; firstNum++) {
        if (isPrime(firstNum)) {
            primes.push(firstNum);
        };
    }
    return primes;
}

console.log(primeFinder(1, 25));

//Objects and Methods
const MHA = {
    firstName: "Mohammad",
    middelName: "Hossain",
    lastName: "Ansari",
    BoD: 1989,
    favorites: ["Movie", "Coding", "Family Matters", "Video Games"],
    age: function ageCal() {
        const currentyear = new Date().getFullYear();
        return currentyear - this.BoD;
    }
}


console.log(MHA);
console.log(MHA.age());
// adding a property to an object
MHA.gender = "male";
console.log(MHA);

// array note
let A = [0, 1, 2];
let B = A;
B[3] = 3;

console.log(A);

// Objects

let C = { index0: 0, index1: 1, index2: 2 };
let D = C;
let E = D;
D.index3 = 3;
console.log(C);

// for-of Array
const myArray = [0, 1, 2, 3, 4, 5];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

for (let element of myArray) {
    console.log(element);
}

// for-of String
const myString = "Hello, World!";

for (let i = 0; i < myString.length; i++) {
    console.log(myString.charAt(i));
}

for (let element of myString) {
    console.log(element);
}

// for-in 

for (let key in MHA) {
    console.log(key, ">>>", MHA[key]);
}

// Factory Function

function createCircle(redius) {
    return {
        redius: redius,
        isVisible: true,
        draw: function () { console.log('draw') }
    }
}

const myCircle = createCircle(5);
console.log(myCircle);
console.log(myCircle.constructor);

// Constructor Function
function Circle(radius) {
    this.redius = radius;
    this.isVisible = true;
    this.draw = function () {
        console.log('draw')
    }
}

const myCircle2 = new Circle(3);
console.log(myCircle2);
console.log(myCircle2.constructor);

// Random Numbers
function getRandomNumber(max, min) {
    return Math.random() * (max - min) + min;
}

console.log(getRandomNumber(10, 100));

// forEach
myArray.forEach(element => console.log(`${element} is :`, element % 2 == 0 ? "Even" : "Odd"));

// sort objects

const myObject = [
    { id: "01", name: "Mohammad" },
    { id: "02", name: "Hassan" },
    { id: "03", name: "Rahim" },
    { id: "04", name: "Ali" }];

myObject.sort((A, B) => {
    if (A.name < B.name) return -1;
    if (A.name > B.name) return 1;
    else { return 0; }
})

console.log(myObject);

// Methoos in OBJs
function Video(title) {
    this.title = title;
    console.log(this);
}
const V = new Video("ABC");
console.log(V);

function game(title, RPG, year) {
    this.title = title;
    this.RPG = RPG;
    this.year = year;
}

const wow = new game("WOW", +13, 2010);
console.log(wow);

///Getter and Setter

const person = {
    fName: "Mohammad",
    lName: "Ansari",
    get fullName() {
        return (`${this.fName} ${this.lName}`);
    },
    set fullName(value) {
        const partName = value.split(' ');
        this.fName = partName[0];
        this.lName = partName[1];
    }
};

console.log(person.fullName);
console.log(person.fullName = "Ahmad Ansari");


// rest Operator

function calclator(discount, ...argo) {
    const total = argo.reduce((a, b) => a + b);
    return total - (total * (discount / 100));
}

console.log(calclator(10, 1, 2, 3, 4, 5, 6, 7, 8, 9));

// Try and Cache

const car = {
    company: "Honda",
    model: "Fit",
    year: 2010,
    mileage: 102000,
    insurance: true,
    salvage: true,
    get old() {
        return new Date().getFullYear() - this.year;
    },
    get avarageMileagePerYear() {
        return this.mileage / this.old;
    },

    get fullInfo() {
        return `your car is ${this.company} ${this.model} ${this.year} and its Mileage is ${this.mileage}, ${this.insurance == true ? "it has insurance" : "It doent have any Insurance"}, ${this.salvage == true || this.mileage >= 10 ? "it's a Second hand car" : "It's a New Brand Car"}`
    },

    set myValues(value) {

        if (typeof value != "string")
            throw new Error("value is not a string");
        const fullData = value.split(",");
        this.company = fullData[0];
        this.model = fullData[1];
        this.year = fullData[2];
        this.mileage = fullData[3];
        this.insurance = fullData[4];
        this.salvage = fullData[5];
    }

}
try {
    console.log(car.avarageMileagePerYear);
    console.log(car.fullInfo);
    car.myValues = false;
    console.log(car.fullInfo);
} catch (e) {
    console.log(e);
}

const car = {
    company: "Honda",
    model: "Fit",
    year: 2010,
    mileage: 102000,
    insurance: true,
    salvage: true,
    get old() {
        return new Date().getFullYear() - this.year;
    },
    get avarageMileagePerYear() {
        return this.mileage / this.old;
    },

    get fullInfo() {
        return `your car is ${this.company} ${this.model} ${this.year} and its Mileage is ${this.mileage}, ${this.insurance == true ? "it has insurance" : "It doent have any Insurance"}, ${this.salvage == true || this.mileage >= 10 ? "it's a Second hand car" : "It's a New Brand Car"}`
    },

    set myValues(value) {

        if (typeof value != "string")
            console.log("value is not a string");
        else{
        const fullData = value.split(",");
        this.company = fullData[0];
        this.model = fullData[1];
        this.year = fullData[2];
        this.mileage = fullData[3];
        this.insurance = fullData[4];
        this.salvage = fullData[5];}
    }

}

    console.log(car.avarageMileagePerYear);
    console.log(car.fullInfo);
    car.myValues = false;
    console.log(car.fullInfo);



