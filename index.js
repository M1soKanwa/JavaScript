const obj = {
    Mon: 'get a drive license',
    Tue: 'come to new boss',
    Wed: 'visit parents',
    Thu: 'go to gym',
    Fri: 'study spanish language',
    Sat: 'go to swim',
    Sun: 'meet with friends',
    'favorite color' : 'skyblue', // practise operator IN
    0: 'gaga' // practise operator IN
}

// оператор in 
// in - бинарный оператор
// "key" in obj(название объекта).

console.log('Mon' in obj);
console.log('Tue' in obj);
console.log('Wed' in obj);
console.log('Thu' in obj);
console.log('Fri' in obj);
console.log('Sat' in obj);
console.log('Sun' in obj);

console.log('favorite color' in obj); // practise operator IN
console.log(0 in obj); // practise operator IN

// Оператор In может проверять только одно!