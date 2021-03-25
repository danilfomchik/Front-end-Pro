var blueBody = document.querySelector('body');
var blueDiv = document.getElementById('blueRect');

var moveUp = blueDiv.offsetTop;
var moveLeft = blueDiv.offsetLeft;

var offsetWidth = document.documentElement.clientWidth;
var offsetHeight = document.documentElement.clientHeight;
console.log('offsetWidth-->', offsetWidth);
console.log('offsetHeight-->', offsetHeight);

function moveElement(event){
    switch(event.key){
        case 'ArrowRight': 
            if(moveLeft < offsetWidth - 160){
                blueDiv.style.left = moveLeft + 10 + 'px';
                moveLeft += 10;
            }
            break;
        case 'ArrowDown': 
            if(moveUp < offsetHeight - 160){
                blueDiv.style.top = moveUp + 10 + 'px';
                moveUp += 10;
            }
            break;
        case 'ArrowUp': 
            if(moveUp > 0){
                blueDiv.style.top = moveUp - 10 + 'px';
                moveUp -= 10;
            }
            break;
        case 'ArrowLeft': 
            if(moveLeft > 0){
                blueDiv.style.left = moveLeft - 10 + 'px';
                moveLeft -= 10;
            }
            break;
    }
};

blueBody.addEventListener('keydown', moveElement);
