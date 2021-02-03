/*
//2.1
var age = confirm('Вам есть 18?');
console.log('Age --> ', age);

var smoking = confirm('Куришь?');
console.log('Smoking --> ', smoking);

if(!age && !smoking){
    alert('Так держать !');
} else if(!age && smoking){
    alert('Маме расскажу !');
} else if(age && !smoking){
    alert('Молодец, и не надо !');
} else if(age && smoking){
    alert('Ну и зря !');
}
*/





//2.2
var value1 = prompt('Введите первое значение');
var value2 = prompt('Введите второе значение');

var num1 = Number(value1);
var num2 = Number(value2);

console.log('Value1 --> ', num1);
console.log('Value2 --> ', num2);

if(num1 > num2){
    alert(num1 + ' > ' + num2);
} else if(num1 < num2){
    alert(num2 + ' > ' + num1);
} else if(num1 = num2){
    alert('Числа равны!');
} else{
    alert('Упс! Что-то пошло не так...');
}




/*
//2.3
var kilometers = prompt('Введите растояние в киллометрах');
console.log('Kilometers --> ', kilometers);

var value2 = prompt('Введите растояние в футах');
ft = value2 * 0.305;
console.log('FT --> ', ft);

if(kilometers > ft){
    alert(value2 + ' футов, это ' + ft + ' киллометров! ' + 'Соответственно ' + kilometers + ' киллометров больше, чем ' + value2 + ' футов !');
} else if(kilometers < ft){
    alert(value2 + ' футов, это ' + ft + ' киллометров! ' + 'Соответственно ' + kilometers + ' киллометров меньше, чем ' + value2 + ' футов !');
} else if(kilometers = ft){
    alert('Расстояние равное!');
} else{
    alert('Упс! Что-то пошло не так...');
}
*/