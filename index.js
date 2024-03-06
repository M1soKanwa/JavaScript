/*

Массивы :



(1.) arr.push(...items) – добавляет элементы в конец.

(2.) arr.pop() – извлекает элемент из конца.

(3.) arr.shift() – извлекает элемент из начала.

(4.) arr.unshift(...items) - добавляет элементы в начало.


*arr.forEach(function(item, index, array) {
  // ... делать что-то с item
});

(5.) arr.splice - это универсальный «швейцарский нож» для работы с массивами. Умеет всё: добавлять, удалять и заменять элементы : 


// let arr = ["Я", "изучаю", "JavaScript"];

// arr.splice(1, 1); // начиная с индекса 1, удалить 1 элемент

// alert( arr ); // осталось ["Я", "JavaScript"]


(6.) arr.slice - Он возвращает новый массив, в который копирует все элементы с индекса start до end (не включая end). start и end могут быть отрицательными
в этом случае отсчёт позиции будет вестись с конца массива.

arr.slice([start], [end])

// let arr = ["t", "e", "s", "t"];

// alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)

// alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)


(7.) arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.

let arr = [1, 2];

//  создать массив из: arr и [3,4]
 alert( arr.concat([3, 4]) ); // 1,2,3,4

//  создать массив из: arr и [3,4] и [5,6]
 alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

//  создать массив из: arr и [3,4], потом добавить значения 5 и 6
 alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6



 let arr = [1, 2];

let arrayLike = {
  0: "что-то",
  length: 1
};

alert( arr.concat(arrayLike) ); // 1,2,[object Object]



let arr = [1, 2];

let arrayLike = {
  0: "что-то",
  1: "ещё",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,что-то,ещё


 (8.) arr.forEach - позволяет запускать функцию для каждого элемента массива.

 arr.forEach(function(item, index, array) {
  // ... делать что-то с item
});


(9.) arr.indexOf    and    (10.) arr.includes -
одинаковый синтаксис и они делают по сути то же самое, что и их строковые аналоги, но работают с элементами вместо символов:

arr.indexOf(item, from) ищет item начиная с индекса from и возвращает номер индекса, на котором был найден искомый элемент, в противном случае -1.

arr.includes(item, from) ищет item начиная с индекса from и возвращает true, если поиск успешен.


(11.) arr.lastIndexOf похож на indexOf, но ищет справа налево.


Представьте, что у нас есть массив объектов. Как нам найти объект с определённым условием?

Здесь пригодится метод (12.) arr.find.

Синтаксис:

let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});
Функция вызывается по очереди для каждого элемента массива:

item – очередной элемент.
index – его индекс.
array – сам массив.
Если функция возвращает true, поиск прерывается и возвращается item. Если ничего не найдено, возвращается undefined.

Например, у нас есть массив пользователей, каждый из которых имеет поля id и name. Найдем пользователя с id == 1:

let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // Вася
В реальной жизни массивы объектов – обычное дело, поэтому метод find крайне полезен.

Обратите внимание, что в данном примере мы передаём find функцию item => item.id == 1 с одним аргументом. Это типично, другие аргументы этой функции используются редко.

У метода (13.) arr.findIndex такой же синтаксис, но он возвращает индекс, на котором был найден элемент, а не сам элемент. Значение -1 возвращается, если ничего не найдено.

Метод (14.) arr.findLastIndex похож на findIndex, но ищет справа налево, наподобие lastIndexOf.

Например:

let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"},
  {id: 4, name: "Вася"}
];

// Найти индекс первого Васи
alert(users.findIndex(user => user.name == 'Вася')); // 0

// Найти индекс последнего Васи
alert(users.findLastIndex(user => user.name == 'Вася')); // 3


Метод find ищет один (первый) элемент, который заставит функцию вернуть true.

Если найденных элементов может быть много, можно использовать (15.) arr.filter(fn).

Синтаксис схож с find, но filter возвращает массив из всех подходящих элементов:

let results = arr.filter(function(item, index, array) {
  // если `true` -- элемент добавляется к results и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
});
Например:

let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2



Метод (16.) arr.map является одним из наиболее полезных и часто используемых.

Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.

Синтаксис:

let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
});
Например, здесь мы преобразуем каждый элемент в его длину:

let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
alert(lengths); // 6,8,6


Вызов (17.) arr.sort() сортирует массив на месте, меняя в нём порядок элементов.

Он также возвращает отсортированный массив, но обычно возвращаемое значение игнорируется, так как изменяется сам arr.

Например:

let arr = [ 1, 2, 15 ];

// метод сортирует содержимое arr
arr.sort();

alert( arr );  // 1, 15, 2
Не заметили ничего странного в этом примере?

Порядок стал 1, 15, 2. Это неправильно. Но почему?

По умолчанию элементы сортируются как строки.

Буквально, элементы преобразуются в строки при сравнении. Для строк применяется лексикографический порядок, и действительно выходит, что "2" > "15".

Чтобы использовать наш собственный порядок сортировки, нам нужно предоставить функцию в качестве аргумента arr.sort().

Функция должна для пары значений возвращать:

function compare(a, b) {
  if (a > b) return 1; // если первое значение больше второго
  if (a == b) return 0; // если равны
  if (a < b) return -1; // если первое значение меньше второго
}
Например, для сортировки чисел:

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr);  // 1, 2, 15
Теперь всё работает как надо.

Сделаем отступление и подумаем, что происходит. arr может быть массивом чего угодно, верно? Он может содержать числа,
 строки, объекты или что-то ещё. У нас есть набор каких-то элементов. Чтобы отсортировать его, нам нужна упорядочивающая функция, которая знает,
  как сравнивать его элементы. По умолчанию элементы сортируются как строки.

Метод arr.sort(fn) реализует общий алгоритм сортировки. Нам не нужно заботиться о том, как он работает внутри
 (в большинстве случаев это оптимизированная быстрая сортировка или Timsort).
  Она проходится по массиву, сравнивает его элементы с помощью предоставленной функции и переупорядочивает их.
   Всё, что нам нужно, – предоставить fn, которая делает сравнение.


   Метод (18.) arr.reverse меняет порядок элементов в arr на обратный.

Например:

let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1
Он также возвращает массив arr с изменённым порядком элементов.


Ситуация из реальной жизни. Мы пишем приложение для обмена сообщениями, и посетитель вводит имена тех, кому его отправить, через запятую:
 Вася, Петя, Маша. Но нам-то гораздо удобнее работать с массивом имён, чем с одной строкой. Как его получить?

Метод (19.) str.split(delim) именно это и делает. Он разбивает строку на массив по заданному разделителю delim.

В примере ниже таким разделителем является строка из запятой и пробела.

let names = 'Вася, Петя, Маша';

let arr = names.split(', ');

for (let name of arr) {
  alert( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
}

У метода split есть необязательный второй числовой аргумент – ограничение на количество элементов в массиве. 
Если их больше, чем указано, то остаток массива будет отброшен. На практике это редко используется:

let arr = 'Вася, Петя, Маша, Саша'.split(', ', 2);

alert(arr); // Вася, Петя


Вызов (20.) arr.join(glue) делает в точности противоположное split. Он создаёт строку из элементов arr, вставляя glue между ними.

Например:

let arr = ['Вася', 'Петя', 'Маша'];

let str = arr.join(';'); // объединить массив в строку через ;

alert( str ); // Вася;Петя;Маша


                                                                /////Шпаргалка/////

push(...items) – добавляет элементы в конец,
pop() – извлекает элемент с конца,
shift() – извлекает элемент с начала,
unshift(...items) – добавляет элементы в начало.
splice(pos, deleteCount, ...items) – начиная с индекса pos удаляет deleteCount элементов и вставляет items.
slice(start, end) – создаёт новый массив, копируя в него элементы с индекса start до end (не включая end).
concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
Для поиска среди элементов:

indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
findIndex похож на find, но возвращает индекс вместо значения.
Для перебора элементов:

forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
Для преобразования массива:

map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
sort(func) – сортирует массив «на месте», а потом возвращает его.
reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
split/join – преобразует строку в массив и обратно.
reduce/reduceRight(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
Дополнительно:

Array.isArray(arr) проверяет, является ли arr массивом.

*/