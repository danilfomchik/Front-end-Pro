const cartNumbItem = document.querySelectorAll('input');
let valuesArray = [];


(function fillingCardNumber(){
    for(var iterator of cartNumbItem){
        iterator.addEventListener('input', goNextInput);
        iterator.addEventListener('keydown', goPreviousInput);
        iterator.addEventListener('keypress', blockLetters);
    }
})();

//next input
function goNextInput(){
    if(this.value){
        this.nextElementSibling.focus()
        valuesArray.push(this.value);
        var stringifyValues = valuesArray.join('');

        document.cookie = `name=${stringifyValues}`;
        console.log('stringifyValues-->', stringifyValues);
    }
}

//Previous input
function goPreviousInput(event){
    if(event.keyCode == 8 && this.value.length === 0){
        this.previousElementSibling.focus();
        valuesArray.pop();
        var stringifyValues = valuesArray.join('');

        document.cookie = `name=${stringifyValues}`;
        console.log('stringifyValues-->', stringifyValues);
    }
}

//pattern
function blockLetters(event){
    if(event.keyCode < 48 || event.keyCode > 57){
        event.preventDefault();
    }
}

alert('Наш сайт использует куки. Продолжая работу на этом сайте вы даёте согласие на использование cookie-файлов.')

//get coockie
var getCookie = function(name) {
	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

var cookieData = getCookie('name');


(function cookieFill(){
    var cookieDataArray = cookieData.split('');

    if(cookieData.length >= 12){
        for(var i = 0; i < cartNumbItem.length; i++){
            cartNumbItem[i].value = cookieDataArray[i]
        }
    }
})();

(function isCookie(){
    if (navigator.cookieEnabled === false){
        console.log("No cookies!");
    } else{
        console.log("Cookies is ready!");
    }    
})();
