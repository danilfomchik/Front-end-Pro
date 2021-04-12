var firstInput = document.search.value1;
var secondInput = document.search.value2;
var thirdInput = document.search.value3;
var resultInput = document.search.result;

var sumButton = document.search.print;
sumButton.addEventListener('click', sumValues);

function sumValues(){
    var value1 = parseInt(firstInput.value);
    var value2 = parseInt(secondInput.value);
    var value3 = parseInt(thirdInput.value);

    var result = parseInt(value1 + value2 + value3)
    resultInput.value = result;

    if(resultInput.value === 'NaN'){
        alert('Вы должны ввести все числа');
    }
}

var sumBox = document.sumOfNumber.intSum;
var pSum = document.querySelector('.sum')

function onblure(e) {
    var arr = sumBox.value.split('');
    arr = arr.map(Number);
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    pSum.innerHTML = `Сумма его цифер: ${sum}`;

    e.preventDefault();
    sumBox.value = '';
    sumBox.focus()
}
sumBox.addEventListener('blur', onblure);