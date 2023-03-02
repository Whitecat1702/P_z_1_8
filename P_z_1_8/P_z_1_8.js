'use strict'
// zavd 1
/*let number = 0;
while (number < 101) {
    console.log(number)
    number ++;
}*/
// zavd 2
/*let number = 0;
do {
    if (number === 0) {
        console.log(`${number} - this zero`);
    }
    else if (number%2!=0) {
        console.log(number + ' - this neparne');
    }
    else if (number%2==0) {
        console.log(number + ' - this parne');
    }
    number ++;
}while(number<11);*/
//zavd 3
/*for(let i = -1; i < 9; i++, console.log(i));*/
//zavd 4_1
/*let number = prompt("Enter number:");
let star = "*";
let star1 = "*"
for (let i = 0; i < number; i++){
    document.write(star + "<br>");
    star+=star1;
}*/
//zavd 4_2
/*var i = 0, j = 0;
let max = prompt("Enter number:");
var space = "",
  star = "";
while (i < max) {
  space = "";
  star = "";
  for (j = 0; j < max; j++){
    space += " ";
  }
  for (j = 0; j < 2 * i + 1; j++){
    star += "*";
  }
  document.write(space + star + "<br>");
  i++;
}*/
//zavd 4_3
//zavd 5
/*let number = 10000;
let count = 0;
do {
    number = number/2;
    count++;
}while(number > 50);
console.log("Rezult: " + number);
console.log("Counter: " + count);*/
// zavd 6
/*let month = prompt("Enter number month (1-12):");
if (month == 1 && 2 && 12){
    alert("Зима")
}else if (month == 3 && 4 && 5){
    alert("Весна")
}else if (month == 6 && 7 && 8){
    alert("Літо")
}else if (month == 9 && 10 && 11){
    alert("Осінь")
}else{
    alert("Попросили нориально від (1-12)")
} 
switch (month) {
    case '1':
        alert("Січень")
        break;
    case '2':
        alert("Лютий");
        break; 
    case '3':
        alert("Березень");
        break;
    case '4':
        alert("Квітень");
        break;
    case '5':
        alert("Травень");
        break;
    case '6':
        alert("Червень");
        break;
    case '7':
        alert("Липень");
        break;
    case '8':
        alert("Серпень");
        break;
    case '9':
        alert("Вересень");
        break;
    case '10':
        alert("Жовтень");
        break;
    case '11':
        alert("Листопад");
        break;
    case '12':
        alert("Грудень");
        break;
}*/
//zavd 7
/*var temp_C = prompt("Введіть теипературу за Цельсієм:");
let temp_p = 0;
temp_p = (9/5)*temp_C + 32;
alert(temp_p);*/
//zavd 8
/*let day_week = prompt("Введіть число дня тижня (1-7):");
if (day_week < 1 || day_week > 7){
    alert("Я ж по-нормальному попросив:(")
}
switch(day_week){
    case '1':
        document.write("Понеділок");
        break;
    case '2':
        document.write("Вівторок");
        break;
    case '3':
        document.write("Середа");
        break;
    case '4':
        document.write("Четверг");
        break;
    case '5':
        document.write("П'ятниця");
        break;
    case '6':
        document.write("Субота");
        break;
    case '7':
        document.write("Неділя");
        break;
}*/


