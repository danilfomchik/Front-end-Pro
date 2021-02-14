// объединение
var letters = ['a', 'b', 'c'];
var numbers = [1, 2, 3];
var result = letters.concat(numbers);

console.log('joinTwoArr -->', result);

// reverse
var numbers = [1, 2, 3];
numbers.reverse();

console.log('reverseArr -->', numbers);

// сортировка
var numbers = [3, 4, 1, 2, 7];
numbers.sort();

console.log('sortArr -->', numbers);

// вывод только чётных чисел
var numbers = [3, 4, 1, 2, 7];

function condition(value, index, array) {
    var result = false;
    if (value % 2 === 0) {
        result = true;
    }
    return result;
};

var evenNumbers = numbers.filter(condition);
console.log('evenNumbers -->', evenNumbers);

