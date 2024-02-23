const user = {
    name: 'Don',
    lastname: 'Bo',
    age: 32,
    'favorite color' : 'skyblue',
    movie: 'Runner',
    avatar: 'http://.....'
}

//for in --->>> используется для перебора ключей в объекте.
// Не этот for(;;)
/*

for(variable in object) {
    // Код который выполняется для каждого свойства.
}

variable - переменная которая будет принимать ключи свойств.
object - объект,свойства которого мы хотим перебрать.

*/

// Задача : в объекте user вывести название всех ключей и свойств.

for (let key in user) {
    console.log(`${key} ---> ${user[key]}`); // key ---> value(свойства).
}

// Задача : Написать функцию , которая принимает объект и выводит все значения и свойства, оформления *...*
// А ключи - "..."

const obj =  {
    key1: 'Y.U',
    key2: 'F.I',
    key3: 'S.T',
    key4: 'N.A'
}

function styling(){

for (const key in obj) {
    console.log(`"${key}" have *${obj[key]}*`)
    }
}    

/*

Задача : 

У нас есть объект с зарплатами всех отделов.
Написать функцию,которая возвращает общую сумму,потраченную на зарплаты всех отделов.


*/

const departmentSalary = {
    HR: 120000,
    development: 5500000,
    PR: 50000,
    marketing: 120000,
    assistant: undefined
}

function sumSalary(salaryObject) {
    let sum = 0;

    for(let key in salaryObject){
        if(typeof salaryObject[key] === 'number') {
            sum += salaryObject[key];
        }
    }

    return sum;
}