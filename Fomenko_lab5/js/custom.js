var addToEnd = ['a', 'b', 'c'];
addToEnd.push(1, 2, 3);
console.log('addToEnd --> ', addToEnd);


var addToBeginning = [1, 2, 3];
addToBeginning.unshift(4, 5, 6);
console.log('addToBeginning --> ', addToBeginning);


var language = ['js', 'css', 'jq'];
console.log('languageFirst --> ', language[0]);
console.log('languageLast --> ', language[2]);


var numbers =  [1, 2, 3, 4, 5];
var newNumbers = numbers.slice(0,3);
console.log('newNumbers --> ',newNumbers);