var offsetWidth = document.documentElement.clientWidth;
var offsetHeight = document.documentElement.clientHeight;

function getRandomValue(value) {
    return Math.floor(Math.random() * value);
}

function moveNewWindow (){
    var win = window.open('', 'FrontEnd', 'width=500,height=500');
    win.document.write('<title>Frontend</title><img src="./pictures/cat.jpg" alt="cat" width="450" height="450">');

    var moveNewWindow = setInterval(windowStep, 1000)
    function windowStep(){
        var x = getRandomValue(offsetWidth);
        var y = getRandomValue(offsetHeight);
        win.moveTo(x, y);
        win.focus();
    }
    
    function closeNewWindow(){
        win.close();
        clearInterval(moveNewWindow);
    }
    setTimeout(closeNewWindow, 15000);
}

moveNewWindow()