let buttonNext = document.querySelectorAll('.next'),
    buttonPrev = document.querySelectorAll('.prev'),
    blocks = Array.from(document.querySelectorAll('section')),
    pointer = 0;

var heightRange = document.querySelector('#height');
var heightValueSpan = document.querySelector('#heightValue');

var activityImg = document.querySelector('#activityImg');
var activityRange = document.querySelector('#activityRange')

var expectedResult = document.querySelector('#expectedResult');
var expectedResultImg = document.querySelector('#expectedResultImg');

//активность
activityRange.addEventListener('input', changeHumanActivity)
function changeHumanActivity() {
    var rangeValueValue = activityRange.value;

    switch(rangeValueValue){
        case '1':
            activityImg.src = './pictures/sleeping.png';
            break;
        case '2':
            activityImg.src = './pictures/running.png';
            break;
        case '3':
            activityImg.src = './pictures/sitting.png';
            break;
        case '4':
            activityImg.src = './pictures/coperaiting.png';
            break;
    }
}

//желаемый результат
expectedResult.addEventListener('input', expectedHumanResult)

function expectedHumanResult(){
    var expectedResultValue = expectedResult.value;

    switch(expectedResultValue){
        case '1':
            expectedResultImg.src = './pictures/fat.png'
            break;
        case '2':
            expectedResultImg.src = './pictures/skinny.png'
            break;
        case '3':
            expectedResultImg.src = './pictures/athlet.png'
            break;
    }
}

//рост
heightRange.addEventListener('input', changeHumanHeight)
function changeHumanHeight(){
    heightValueSpan.textContent = `${height.value} см.`;
}

function goNextElement(){
    for(var i = 0; i < buttonNext.length; i++){
        buttonNext[i].addEventListener('click', function(){
            // Убираем прошлый блок
            blocks[pointer].classList.remove('active_block');
            
            if(pointer + 1 >= blocks.length)
              pointer = 0;
            else
              pointer++;
            
            // Отмечаем новый блок
            blocks[pointer].classList.add('active_block');
        });
    }
}
goNextElement();

function goPrevElement(){
    for(var j = 0; j < buttonPrev.length; j++){
        buttonPrev[j].addEventListener('click', function(){
            // Убираем прошлый блок
            blocks[pointer].classList.remove('active_block');
            
            if(pointer - 1 >= blocks.length)
              pointer = 0;
            else
              pointer--;
            
            // Отмечаем новый блок
            blocks[pointer].classList.add('active_block');
        });
    }
}
goPrevElement();