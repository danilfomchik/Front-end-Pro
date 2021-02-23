//1
var letters = 'aaa bbb ccc';

var b = letters.substring(4, 7);
console.log('substring -->', b);

var b2 = letters.substr(4, 3);
console.log('substr -->', b2);

var b3 = letters.slice(4, 7);
console.log('slice -->', b3);



//2
var str = 'я учу javascript!';
var upperCase = function(x){
    return x.charAt(0).toUpperCase() + x.slice(1);
}

console.log('upperCase -->', upperCase(str));



//3
var str = 'var_test_text';
var strArray = str.split('_');

console.log('strArray -->', strArray);

var newStr = strArray.reduce(function(accum, item){
    return accum + item.charAt(0).toUpperCase() + item.slice(1);
});
console.log('newStr -->', newStr);



//4
var random = Math.floor(Math.random() * 51);
console.log('randomNumber -->', random);
