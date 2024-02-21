// Задача 

// У нас есть функция
function greetingUser(user) {
    return `Hey ${user.name} ${user.surname} You will be ${user.age + 1} next year.`;
}

// также у нас есть объект 
const user = {
    name: 'John',
    surname: 'Doe',
    age: 19,
}

//Написать функцию greetingUser так, чтобы она приветствовала пользователя и указывала, сколько ему будет лет в следующем году.

// Пример вызывания функции 
greetingUser(user); // Hey John Doe, u will be 20 next year.


