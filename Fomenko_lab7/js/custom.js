/*
//1
var numbers = [ 1, -12, 16, -4, 25, 36 ];
console.log('numbers -->', numbers);

var filteredNumbers = numbers.filter(function(number, index, array){
    return number > 0;
});
console.log('filteredNumbers -->', filteredNumbers);

var sqrtNumbers = filteredNumbers.map(function(value, index, array){
    return Math.sqrt(value);
});
console.log('sqrtNumbers -->', sqrtNumbers);
*/


//2
var numbers = [ 1, 15, 12, 3, 16, 4, 28, 30 ];
var startNum = 1;

var result = numbers.reduce(function(accum, item) {
	if (accum > 10) {
		console.log('numbersFromTheStart --> ', startNum);
		return;
	} else {
		startNum++;
		return accum + item;
	}
}); 