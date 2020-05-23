// переменые для корабля
let location1,location2,location3,guess;
location1= 3;
location2= 4;
location3= 5;
// для введения данных
let hits= 0; //присваем начальное значение
let guesses= 0;//присваиваем начальное значение
let isSunk= false;//перейдет в состояние ,когда корабель пейдет на дно

// while(isSunk==false){
// //   guess= prompt('Введите число для выстрела');
// }

guess= prompt('Введите число для выстрела');
if(guess < 0 || guess > 6){
    alert ('Введите коректное число');
}else{
    guesses+=1; 
}

console.log(guesses);

