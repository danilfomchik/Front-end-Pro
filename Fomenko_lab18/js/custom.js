var closePopUp = document.querySelector('.cancelPopUp');
var buyPopUp = document.querySelector('.buyPopUp');
var classModal = document.querySelector('.modal');
var timerSpan = document.getElementById('timer');

closePopUp.addEventListener('click', closeSalePopUp);
buyPopUp.addEventListener('click', acseptSalePopUp)

var timerFuction = setInterval(popUpTimer);
var countDownDate = new Date('2021-04-15').getTime();

function popUpTimer(){
    var now = new Date().getTime();
    var timeLeft = countDownDate - now;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    timerSpan.innerHTML = `${days}д ${hours}ч ${minutes} мин ${seconds} сек`;
    if(timeLeft = 0){
        clearInterval(timerFuction);
        timerSpan.innerHTML = 'Время истекло, акция окончена!'
    }
}
function closeSalePopUp(){
    classModal.setAttribute('class', 'closePopUp');
    localStorage.setItem('Sale', false);
    localStorage.setItem('ShowSalePopup', JSON.stringify({isShow: true,time: 15000}));
    function showPopUp(){
        classModal.setAttribute('class', 'modal');
    }
    setTimeout(showPopUp, 10000);
}
function acseptSalePopUp(){
    classModal.setAttribute('class', 'closePopUp');
    localStorage.setItem('Sale', true);
    localStorage.setItem('ShowSalePopup', JSON.stringify({isShow: false,time: 0}));
}