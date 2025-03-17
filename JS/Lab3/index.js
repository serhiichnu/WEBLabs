function sumFibonacci(n) {
    let a = 0, b = 1, sum = 0, count = 0;
    while (count < n) {
        sum += a;
        let temp = a + b;
        a = b;
        b = temp;
        count++;
    }
    return sum;
}
console.log(sumFibonacci(10));


function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function sumPrimes(limit) {
    let sum = 0;
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) sum += i;
    }
    return sum;
}
console.log(sumPrimes(1000));


function getDayOfWeek(num) {
    switch (num) {
        case 1: return "Понеділок";
        case 2: return "Вівторок";
        case 3: return "Середа";
        case 4: return "Четвер";
        case 5: return "П'ятниця";
        case 6: return "Субота";
        case 7: return "Неділя";
        default: return "Невірне число";
    }
}
console.log(getDayOfWeek(3));

function filterOddLengthStrings(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filterOddLengthStrings(["apple", "banana", "cat", "dog"]));

const incrementArray = arr => arr.map(num => num + 1);
console.log(incrementArray([1, 2, 3, 4, 5]));

function checkSumOrDifference(a, b) {
    return (a + b === 10 || Math.abs(a - b) === 10);
}
console.log(checkSumOrDifference(7, 3));
console.log(checkSumOrDifference(15, 5));
