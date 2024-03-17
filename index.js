//            Стрелочные функции    ( => )              //



//function sum(a,b) {
//    return a + b
// }

// console.log(sum(821, 9));

//let sum = function() {
//    return a + b
//}

// console.log(sum(821, 9));



//    Вариант 1 

// let sum = (a, b) => {
//     return a + b
// }

// console.log(sum(821, 9));



//    Вариант 2

//  let sum = (a, b) => a + b;

//  console.log(sum(821, 9));


//                       Если стрелочная функция не имеет аргументов,то можно поступить так...


// let random = () => Math.round(Math.random() * 100)

// console.log(random());

//                     Что если у функции 1 аргумент?         //


// let random = (a) => Math.round(Math.random() * a);

let random = a => Math.round(Math.random() * a);

console.log(random(50));


//       Задача 

//              Вариант 1 

//    let count = 0;
//    let action = function() {
//        count++
//        console.log('Повторение ' + count);
//     } 


//  setInterval(action, 400);

//                 Вариант 2

   let count = 0;
   setInterval(() => console.log(`Номер  ${++count}`), 1000);