//1
const divs = document.querySelectorAll('div');
const cutText = document.querySelector('#cutText');
const rainbow = document.querySelector('.rainbow');

cutText.addEventListener('click', () => {
    for(var i = 0; i < divs.length; i++){
        let text = divs[i].textContent;

        divs[i].textContent = `${text.substring(0, 10)}...`;
    }
})


//2
var colors = ['red', 'green', 'blue'],
    index = -1;

function changeColor(){
    ++index;
    if(index >= colors.length){
        index = 0;
    }
    rainbow.style.color = colors[index];
}

setInterval(changeColor, 1000)