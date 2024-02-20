/* Разроботка программы для управления книжным магазином

В книжном магазине у нас есть много книг,мы их продаём.

Все наши книги по сути можно представить в виде объекта с одинаковой.

--->  Задача : создать конструктор обьектов для предоставления книг со следующими свойствами.

Название книг, автор, год издания, цена.
Спроектировать методы для получения и установления значений этих особенностей.


--->>> Задача 2 : Сделать для всех книг метод,который вернул бы цену книги но со скидкой.

*/

function Book(title, author, year, price, overview) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.price = price;
    this.overview = overview;

this.getTitle = function() {
    return this.title;
}
this.getAuthor = function() {
    return this.author;
}
this.getYear = function() {
    return this.year;
}
this.getPrice = function() {
    return this.price;
    }

this.setTitle = function(newTitle) {
    this.title = newTitle;
}

this.setAuthor = function(newAuthor) {
    this.author = newAuthor;
}
this.setYear = function(newYear) {
    this.year = newYear;
}
this.setPrice = function(newPrice) {
    this.price = newPrice;
}
this.setOverview = function(newOverview) {
    this.overview = newOverview;
}
this.calculateDiscountedPrice = function(discountPercentage) {
    const discountedPrice = this.price - (this.price * (discountPercentage / 100));
    return discountedPrice;
}
}

const book1 = new Book('Чотири вітри', 'Крістін Генна', 2020, 450, 'Боевик,Комедия,Фэнтэзи');

/*
console.log(book1.getTitle());
console.log(book1.getAuthor());
console.log(book1.getYear());
console.log(book1.getPrice());
*/

book1.setTitle('New Title of Madagaskar');
book1.setAuthor('Prince of Percia');
book1.setYear(1991);
book1.setPrice(777);

console.log(book1.calculateDiscountedPrice(90));

const book2 = new Book('The Little Prince', 'Reynal & Hitchcock', '1945', '1000 $', 'NightBook')

