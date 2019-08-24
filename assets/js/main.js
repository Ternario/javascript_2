console.log('Sample JavaScript #2 HW #16');

/* 
#1 
*/

var userObj = {
    age: 22,
    firstName: 'Андрей',
    lastName: 'Шевченко',
    
};
console.log(userObj);

/* 
#2 
*/

var userObj = {
    age: 22,
    firstName: 'Андрей',
    lastName: 'Шевченко', 
    fullName() {
    return `${userObj.firstName} ${userObj.lastName}`;
    }
};
console.log(userObj.fullName());

/* 
#3 
*/

function defUpperStr(str) {
    return (str || 'Default text').toUpperCase();
}

console.log(defUpperStr());
console.log(defUpperStr('My text'));

/* 
#4 
*/

function evenFn(n) {
    let arr = [];
    for (let i=1; i <= n; i++) if (i % 2 === 0) arr.push(i);
    return arr;
}

console.log(evenFn(12));
console.log(evenFn(17));
console.log(evenFn(23));

/* 
#5 
*/

function weekFn(n) {
    let str = '';
    switch (n) {
        case 1:
            str = 'Понедельник';
            break;
        case 2:
            str = 'Вторник';
            break;
        case 3:
            str = 'Среда';
            break;
        case 4:
            str = 'Четверг';
            break;
        case 5:
            str = 'Пятница';
            break;
        case 6:
            str = 'Суббота';
            break;
        case 7:
            str = 'Воскресенье';
            break;
        default:
            str = null;
    }

    return str;
}

console.log(weekFn(1));
console.log(weekFn(4));
console.log(weekFn(8));
console.log(weekFn(2.2));
console.log(weekFn(2));
console.log(weekFn(3));
console.log(weekFn(1.5));


/* 
#6
*/

function ageClassification(n) {
    return n > 0
    ? n > 24
    ? n > 44
    ? n > 65
    ? n > 75
    ? n > 90
    ? n > 122
    ? null
    :'долгожители'
    :'старческий возраст'
    :'пожилой возраст'
    :'средний возраст'
    :'молодой возраст'
    :'детский возраст'
    :null;
}
console.log('25', ageClassification(25));
console.log('5', ageClassification(5));
console.log('-25', ageClassification(-25));
console.log('80', ageClassification(80));
console.log('44.5', ageClassification(44.5));
console.log('10000', ageClassification(10000));
console.log('33', ageClassification(33));
console.log('-99', ageClassification(-99));

/* 
#7 
*/

function oddFn(n) {
    let arr = []
    let i = 0;

    while( i++ < n) if (i % 2 !== 0) arr.push(i);
    return arr;
}

console.log(oddFn(9));
console.log(oddFn(15));
console.log(oddFn(30));

/* 
#8
*/

function mainFunc(a, b, func) {
    if(func && typeof func === 'function') return func(a, b);

    return false;
}

function cbRandom(a,b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function cbPow(a, b) {
    return Math.pow(a, b);
}

function cbAdd(a, b) {
    return a + b;
}

console.log(mainFunc(2, 10, cbRandom));
console.log(mainFunc(2, 10, cbPow));
console.log(mainFunc(2, 10, cbAdd));
console.log(mainFunc(2, 10, 'not a func'));



