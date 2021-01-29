var radius = prompt('Введите радиус цилиндра!');
/*alert('Вы ввели ' + radius + ' !');*/
console.log('radius--> ', radius);

var numberPI = prompt('Введите число ПИ!', 3.14159);
console.log('PI--> ', numberPI);

var cylinderHeight = prompt('Введите высоту цилиндра!');
/*alert('Вы ввели ' + cylinderHeight + ' !');*/
console.log('Height--> ', cylinderHeight);

var result = (Math.PI * Math.pow(radius, 2) * cylinderHeight);
alert('Объём цилиндра с радиусом ' + radius + ' и высотой цилиндра ' + cylinderHeight + ' равен: ' + result);
console.log('Result--> ', result);