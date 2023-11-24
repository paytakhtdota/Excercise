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
const primeFinder = (firstNum,secNum) => {
    let primes=[];
    for(firstNum;firstNum <= secNum; firstNum++){
        if(isPrime(firstNum)){
            primes.push(firstNum);
        };
    }
    return primes;
}

console.log(primeFinder(1,25));

//Objects and Methods
const MHA ={
    firstName : "Mohammad",
    middelName:"Hossain",
    lastName:   "Ansari",
    BoD:    1989,
    favorites :["Movie","Coding","Family Matters","Video Games"],
    age : function ageCal(){
        const currentyear = new Date().getFullYear();
        return currentyear-this.BoD;
    }
}


console.log(MHA);
console.log(MHA.age());


