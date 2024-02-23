const user = {
    'name': 'John', // Ключ 'name', значение - 'John'
    'favorite color': 'red' ,
    0: 'value'
}

// Ключом в объекте может быть рядок или тип данных Symbol
 
//  .  --->>> оператор доступа по имени свойства (когда речь идет про валидные идентификаторы)

console.log(user.name); // John
// user.'favorite color'; --->>>  syntax ERROR
// user.0; --->>> synax ERROR

// [] - оператор доступа к вычислительным свойствам (когда речь идёт про не валидные идентификаторы)

console.log(user['favorite color']); // RED

console.log(user[0]); // Value


const someOption = {
    2: 10
}

// Задача : получить значение которое находится под ключом 2.

console.log(someOption[2]);
console.log(someOption ['2']);

