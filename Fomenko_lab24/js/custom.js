fetch('https://api.github.com/users')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    for(var i = 0; i < data.length; i++){
        if(i < 10){
            console.log(`Пользователь ${i + 1}`);
            console.log('data--->', data[i].login)
            console.log('data--->', data[i].avatar_url)
            console.log('data--->', data[i].id)
        }
    }
})