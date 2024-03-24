function Click() {
    const number = prompt('Введите номер от 1 до 5');
    if(number <= 5)
    alert (`Твоё число ${number}`);
     else if (number > 5){
        console.log('Неверное число,введите число от 1 до 5');
    }
}