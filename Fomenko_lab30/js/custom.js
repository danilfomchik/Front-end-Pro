const welcomePopUp = document.querySelector('.welcomePopUp');
const refreshCookies = document.querySelector('.refreshCookies');

alert('Добро пожаловать!');

refreshCookies.addEventListener('click', () => {
    welcomePopUp.classList.remove('active');
    setCookie();
});

function setCookie() {
    const curDate = new Date();

    const curYear = curDate.getFullYear();
    const curDay = curDate.getDate();
    const curMonth = curDate.getMonth();
    const curHour = curDate.getHours();
    const curMinutes = curDate.getMinutes();

    document.cookie = `name=Vasya;max-age=10`;
    document.cookie = `date=${curHour}ч. ${curMinutes}м. ${curDay}.${curMonth + 1}.${curYear};max-age=10`;
}
setCookie();

let timerId = setInterval(() => {
    if(!document.cookie){
        welcomePopUp.classList.add('active');
    }
}, 1000);
