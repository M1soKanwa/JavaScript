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
