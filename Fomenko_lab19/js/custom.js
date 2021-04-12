var offsetWidth = document.documentElement.clientWidth;
var offsetHeight = document.documentElement.clientHeight;
var params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=500,height=500`;

function getRandomValue(value) {
    return Math.floor(Math.random() * value);
}

var moveNewWindow = setInterval(moveNewWindow, 1000)

function moveNewWindow (){
    var win = window.open('', 'FrontEnd', params);
    win.document.write('<title>Frontend</title><img src="./pictures/cat.jpg" alt="cat" width="450" height="450">');
    win.moveTo(getRandomValue(offsetWidth), getRandomValue(offsetHeight));
    win.focus();
    
    function closeNewWindow(){
        win.close();
        clearInterval(moveNewWindow);
    }
    setTimeout(closeNewWindow, 15000);
}