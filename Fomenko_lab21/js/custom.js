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
    
    if(isNaN(value1) || value1 == ''){
        alert('Введите первое число');
        firstInput.value = '';
        firstInput.focus();
    } else if(isNaN(value2) || value2 == ''){
        alert('Введите второе число');
        secondInput.value = '';
        secondInput.focus();
    } else if(isNaN(value3) || value3 == ''){
        alert('Введите третье число');
        thirdInput.value = '';
        thirdInput.focus();
    }

    var result = parseInt(value1 + value2 + value3)
    resultInput.value = result;

}

var sumBox = document.sumOfDigits.number;
var pSum = document.querySelector('.sum')
var sumSpan = document.querySelector('.sumSpan')

function onblure(e) {
    var sumBoxArray = sumBox.value.split('');

    var sum = 0;
    for(var i = 0; i < sumBoxArray.length; i++){
        sum += +sumBoxArray[i];
    }
    sumSpan.innerHTML = ` ${sum}`;

    if(isNaN(sum)){
        alert('Вы должны ввести число');
        sumBox.focus()
    }
    e.preventDefault();
    sumBox.value = '';
}
sumBox.addEventListener('blur', onblure);