/*

Задача : У нас есть объект с разными версиями приветствия.
Вывести пользователю приветствие, зависимое от значения которое он ввёл.

*/

const greets = {
    15: 'Hi',
    17: 'Ya, whats up',
    19: 'Hello', 
    30: 'Good morning amigo!'
}

const valueFromUser = 30;

console.log(greets[valueFromUser]); // Hello 


