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
