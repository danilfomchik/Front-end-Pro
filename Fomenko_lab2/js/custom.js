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




/*
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
*/




//2.3
var kilometers = prompt('Введите растояние в киллометрах');
var foots = prompt('Введите растояние в футах');

foot = foots * 0.305;

var km = Number(kilometers);
var ft = Number(foot);

console.log('Foots --> ', ft);
console.log('Kilometers --> ', km);


if(km > ft){
    alert(foots + ' футов, это ' + ft + ' киллометров! ' + 'Соответственно ' + km + ' киллометров больше, чем ' + foots + ' футов !');
} else if(km < ft){
    alert(foots + ' футов, это ' + ft + ' киллометров! ' + 'Соответственно ' + km + ' киллометров меньше, чем ' + foots + ' футов !');
} else if(km = ft){
    alert('Расстояние равное!');
} else{
    alert('Упс! Что-то пошло не так...');
}
