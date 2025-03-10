
function findMinMax(arr) {
    let max = Number.MIN_VALUE, min = Number.MAX_VALUE

    arr.forEach(element => {
        if(element < min) {
            min = element
        }
        if(element > max) {
            max = element
        }
    });

    return {
        min: min,
        max: max
    };
}

console.log(findMinMax([3, 7, 2, 9, 5]));

function compareObjects(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(compareObjects({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log(compareObjects({ a: 1, b: 2 }, { a: 1, b: 3 }));


function isInRange(num, min, max) {
    return num >= min && num <= max;
}

console.log(isInRange(5, 1, 10)); 
console.log(isInRange(15, 1, 10));

let flag = true;
flag = !flag;
console.log(flag);

function getGradeDescription(grade) {
    if (grade >= 90) return "Відмінно";
    if (grade >= 75) return "Добре";
    if (grade >= 60) return "Задовільно";
    return "Незадовільно";
}

console.log(getGradeDescription(85));

function getSeason(month) {
    if (month >= 3 && month <= 5) return "Весна";
    if (month >= 6 && month <= 8) return "Літо";
    if (month >= 9 && month <= 11) return "Осінь";
    return "Зима";
}

console.log(getSeason(4));
function getSeasonTernary(month) {
    return month >= 3 && month <= 5 ? "Весна" :
           month >= 6 && month <= 8 ? "Літо" :
           month >= 9 && month <= 11 ? "Осінь" : "Зима";
}

console.log(getSeasonTernary(7));
