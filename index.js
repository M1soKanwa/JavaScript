///////                       DATE                      ///////


//        let now = new Date();
//        console.log(now);

// Так можно вывести настоящую дату(время)  //

//        let date = new Date(24 * 3600 * 1000);  // (часы секунды милисекунды)
//        console.log(date);

//        let date = new Date("2020-04-14 00:01:05");  // Можно вводить любую дату
//        let date = new Date("3.3.26");
//        console.log(date);

//        let date = new Date(2012, 2, 4, 33, 3, 1);    -->> (33) ушло вперед,добавил день.
//        console.log(date);

//        let date = new Date("2020-04-14 00:01:05");  
//        date.setFullYear(2022);
//        date.setMonth(14);   // добавился год,потому как 14 месяцев .     Месяца считаются от нуля -- 0 это январь.
//        date.setDate(15);  // меняется день.
//        console.log(date);


// let date = new Date("2017-02-26");
// console.log(date.getFullYear());
// console.log(date.getMonth() +1);
// console.log(date.getDate());

function getDate(date) {     // Функция которая выводит адекватное и красивое время

  let result = ''

  if (date.getDate() < 10) {
      result = result + '0'
  }

  result = result + date.getDate() + '.'

  if (date.getMonth() < 9) {
      result = result + '0'
  }
  result = result + (date.getMonth() + 1) + '.'

  result = result + date.getFullYear()
  
  return result

}

let date = new Date("2017-02-10");
console.log(getDate(date));