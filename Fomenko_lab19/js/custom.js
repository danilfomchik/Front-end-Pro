var offsetWidth = document.documentElement.clientWidth;
var offsetHeight = document.documentElement.clientHeight;

function getRandomValue(value) {
    return Math.floor(Math.random() * value);
}

var moveNewWindow = setInterval(moveNewWindow, 1000)

function moveNewWindow (){
    var win = window.open('about:blank', 'FrontEnd', 'width=500,height=500');
    win.document.write('<img src="./pictures/cat.jpg">');
    win.moveTo(getRandomValue(offsetWidth), getRandomValue(offsetHeight));
    win.focus();
    
    function closeNewWindow(){
        win.close();
        clearInterval(moveNewWindow);
    }
    setTimeout(closeNewWindow, 15000);
}