/*

Задача : У нас есть объект, ключом в котором есть день недели,а значением - планы на этот день.
Принятть от пользователя (через prompt),название дня недели и выдать ему (alert), что запланировано у пользователя на этото день.
*/

const obj = {
    Mon: 'get a drive license',
    Tue: 'come to new boss',
    Wed: 'visit parents',
    Thu: 'go to gym',
    Fri: 'study spanish language',
    Sat: 'go to swim',
    Sun: 'meet with friends'
}

const userValue = String(prompt('Введите день недели из этих вариантов: \nMon \nTue \nWed \nThu \nFri \nSat \nSun'));
alert(obj [userValue] ? obj [userValue] : 'Error Happend');

