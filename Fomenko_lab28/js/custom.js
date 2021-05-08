const cartNumbItem = document.querySelectorAll('input');


function nextInput(){
    for(var iterator of cartNumbItem){
        iterator.addEventListener('input', function(){
            if(this.value){
                this.nextElementSibling.focus()
            } else{
                return null;
            }
        });
        iterator.addEventListener('keydown', function(event){
            if(event.keyCode == 8 && this.value.length === 0){
                this.previousElementSibling.focus();
            }
        });
        iterator.addEventListener('keypress', function(event){
            if(event.keyCode < 48 || event.keyCode > 57){
                event.preventDefault();
            }
        });
    }
}

nextInput();