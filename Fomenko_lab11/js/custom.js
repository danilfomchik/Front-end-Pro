//1
var elem = document.getElementById('elem');

function func(surname, name) {
alert(this.value + ', ' + surname + ' ' + name);
}

var bindResult = func.bind(elem);
bindResult('Петров', 'Петр');



// //2
// var elem = document.getElementById('elem');

// function func() {
// alert(this.value);
// }

// func.call(elem);