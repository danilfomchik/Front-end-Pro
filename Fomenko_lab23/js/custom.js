var sumValue = document.querySelector('.sumValue');
var rollCost = document.mainCalc.rollCost;
var rollCostSum = document.querySelector('.rollCostSum');

var roomLength = document.mainCalc.roomLength;
var roomWidth = document.mainCalc.roomWidth;
var roomArea = document.querySelector('.roomArea');

var rollLength = document.mainCalc.rollLength;
var rollWidth = document.mainCalc.rollWidth;
var rollValue = document.querySelector('.rollValue');

var rollType = document.querySelector('#rollType');
var rollWeight = document.querySelector('.rollWeight');

function roomAreaCalc(){
    var areaValue = +roomLength.value * +roomWidth.value;
    console.log('roomLength.value-->', roomLength.value);
    if(isNaN(roomLength.value) || roomLength.value == ''){
        alert('Введите длину комнаты')
        roomLength.focus()
    } else if(isNaN(roomWidth.value) || roomWidth.value == ''){
        alert('Введите ширину комнаты')
        roomWidth.focus()
    }
    roomArea.innerText = `Площадь комнаты: ${areaValue} м²`;


    var rolls = +rollLength.value * +rollWidth.value;
    if(isNaN(rollLength.value) || rollLength.value == ''){
        alert('Введите длину рулона')
        rollLength.focus()
    } else if(isNaN(rollWidth.value) || rollWidth.value == ''){
        alert('Введите ширину рулона')
        rollWidth.focus()
    }

    var rollCalcSum = areaValue / rolls;
    rollValue.innerText = `Количество рулонов на комнату: ${rollCalcSum.toFixed(2)} шт.`;

    rollWeight.innerText = `Общий вес: ${rolls * +rollType.options[rollType.selectedIndex].value} кг.`;
    rollCostSum.innerText = `${rollCost.value * 100} у.е`;
    
    sumValue.innerText = `Общая стоимость: ${(rolls * +rollCost.value) * 100} у.е`;
}

roomLength.addEventListener('input', roomAreaCalc);
roomWidth.addEventListener('input', roomAreaCalc);

rollLength.addEventListener('input', roomAreaCalc);
rollWidth.addEventListener('input', roomAreaCalc);

rollType.addEventListener('input', roomAreaCalc)
rollCost.addEventListener('input', roomAreaCalc)
