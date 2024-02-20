/*

Задача 1 :
Сделать функцию конструктор Country,которая принимает в качестве аргументов:
- Название страны
- Популяцию
- Площадь
Спроектировать метод густоты населения
густота начеления - это популяция этой страны поделённая на площадь этой страны.

*/

function Country(name, population, area) {

this.name = name;
this.population = population;
this.area = area;

this.getDensity = function() {
    return this.population / this.area;
    }
}

const Ukraine = new Country('Ukraine', 43070476, 603549);
const Spain = new Country('Spain', 47000000, 506030);
const Germany = new Country('Germany', 83000000, 357592);
const Canada = new Country('Canada', 38000000, 9958000);



