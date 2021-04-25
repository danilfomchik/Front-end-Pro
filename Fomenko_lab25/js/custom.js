let buttonNext = document.querySelectorAll('.next'),
    buttonPrev = document.querySelectorAll('.prev'),
    sections = Array.from(document.querySelectorAll('section')),
    pointer = 0,
    heightRange = document.querySelector('#height'),
    heightValueSpan = document.querySelector('#heightValue'),
    activityImg = document.querySelector('#activityImg'),
    activityRange = document.querySelector('#activityRange'),
    expectedResultRange = document.querySelector('#expectedResult'),
    expectedResultImg = document.querySelector('#expectedResultImg');


//активность
activityRange.addEventListener('input', changeHumanActivity)

function changeHumanActivity() {
    var activityValue = activityRange.value;

    switch(activityValue){
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
        default:
            activityImg.src = './pictures/sitting.png';
            break;
    }
}

//желаемый результат
expectedResultRange.addEventListener('input', expectedHumanResult)

function expectedHumanResult(){
    var expectedResult = expectedResultRange.value;

    switch(expectedResult){
        case '1':
            expectedResultImg.src = './pictures/fat.png'
            break;
        case '2':
            expectedResultImg.src = './pictures/skinny.png'
            break;
        case '3':
            expectedResultImg.src = './pictures/athlet.png'
            break;
        default:
            expectedResultImg.src = './pictures/skinny.png'
            break;
    }
}

//рост
heightRange.addEventListener('input', changeHumanHeight)

function changeHumanHeight(){
    heightValueSpan.textContent = `${height.value} см.`;
}

//переключение для кнопки Next
function goNextElement(){
    for(var i = 0; i < buttonNext.length; i++){
        buttonNext[i].addEventListener('click', function(){
            // Убираем прошлый блок
            sections[pointer].classList.remove('active_block');
            
            if(pointer + 1 >= sections.length)
              pointer = 0;
            else pointer++;
            
            // Отмечаем новый блок
            sections[pointer].classList.add('active_block');
        });
    }
}
goNextElement();

//переключение для кнопки Prev
function goPrevElement(){
    for(var j = 0; j < buttonPrev.length; j++){
        buttonPrev[j].addEventListener('click', function(){
            // Убираем прошлый блок
            sections[pointer].classList.remove('active_block');
            if(pointer - 1 >= sections.length)
              pointer = 0;
            else pointer--;
            
            // Отмечаем новый блок
            sections[pointer].classList.add('active_block');
        });
    }
}
goPrevElement();