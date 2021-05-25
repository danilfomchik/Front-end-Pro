var dataURL = 'https://api.github.com/users'
var userinfo = document.querySelector('.userinfo');

async function getUserInfo(url){
    let fetchData = fetch(url)
        .catch(() => {
            alert('Whoops! Something went wrong!')
        })
        .then((response) => {
            return response.json()
        })

    let result = await fetchData;

    for(var i = 0; i < result.length; i++){
        if(i < 10){
            let userData = `
            <div>
                <h4>Пользователь: ${i + 1}</h4>
                <p>ID: ${result[i]['id']}</p>
                <p>Login: ${result[i]['login']}</p>
                <p>Avatar URL: ${result[i]['avatar_url']}</p>
            </div>
            `;
            userinfo.innerHTML += userData
        }
    }
}
getUserInfo(dataURL)