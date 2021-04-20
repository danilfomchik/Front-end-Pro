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
    if(roomLength.value == ''){
        alert('Введите длину комнаты')
        roomLength.focus()
    } else if(roomWidth.value == ''){
        alert('Введите ширину комнаты')
        roomWidth.focus()
    }
    roomArea.innerText = `Площадь комнаты: ${areaValue} м²`;

    var rolls = +rollLength.value * +rollWidth.value;
    if(rollLength.value == ''){
        alert('Введите длину рулона')
        rollLength.focus()
    } else if(rollWidth.value == ''){
        alert('Введите ширину рулона')
        rollWidth.focus()
    }

    var rollCalcSum = areaValue / rolls;
    rollValue.innerText = `Количество рулонов на комнату: ${rollCalcSum.toFixed(2)} шт.`;

    rollWeight.innerText = `Общий вес: ${rolls * +rollType.options[rollType.selectedIndex].value} кг.`;
    rollCostSum.innerText = `${rollCost.value * 100} у.е`;
    
    sumValue.innerText = `Общая стоимость: ${(rolls * +rollCost.value) * 100} у.е`;
}

roomLength.addEventListener('change', roomAreaCalc);
roomWidth.addEventListener('change', roomAreaCalc);

rollLength.addEventListener('change', roomAreaCalc);
rollWidth.addEventListener('change', roomAreaCalc);

rollType.addEventListener('change', roomAreaCalc)
rollCost.addEventListener('input', roomAreaCalc)
