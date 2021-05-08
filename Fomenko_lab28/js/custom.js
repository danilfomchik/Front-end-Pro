const cartNumbItem = document.querySelectorAll('input');


function nextInput(){
    for(var value of cartNumbItem){
        value.addEventListener('input', function(){
            this.value ? this.nextElementSibling.focus() : null
        });
        value.addEventListener('keydown', function(event){
            if(event.keyCode == 8 && this.value.length === 0){
                this.previousElementSibling.focus();
            }
        });
        value.addEventListener('keypress', function(event){
            if(event.keyCode < 48 || event.keyCode > 57){
                event.preventDefault();
            }
        });
    }
}

nextInput();