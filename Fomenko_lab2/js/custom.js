
//2.1
var age = prompt('Сколько лет?');
console.log('Age --> ', age);

var smoking = prompt('Куришь?');
console.log('Smoking --> ', smoking);

if(age < 18 && smoking === 'Нет'){
    alert('Так держать !');
} else if(age < 18 && smoking === 'Да'){
    alert('Маме расскажу !');
} else if(age >= 18 && smoking === 'Нет'){
    alert('Молодец, и не надо !');
} else if(age >= 18 && smoking === 'Да'){
    alert('Ну и зря !');
}





/*
//2.2
var value1 = prompt('Введите первое значение');
console.log('Value1 --> ', value1);

var value2 = prompt('Введите второе значение');
console.log('Value2 --> ', value2);

if(value1 > value2){
    alert(value1 + ' > ' + value2);
} else if(value1 < value2){
    alert(value2 + ' > ' + value1);
} else if(value1 = value2){
    alert('Числа равны!');
} else{
    alert('Упс! Что-то пошло не так...');
}
*/



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