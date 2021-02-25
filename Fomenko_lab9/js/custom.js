//1
var obj = {
    'Коля':'1000',
    'Вася':'500',
    'Петя':'200'
};

var firstSalary = obj['Петя'];
document.write(`Зарплата Пети - ${firstSalary} у.е </br>`);

var secondSalary = obj['Коля'];
document.write(`Зарплата Коли - ${secondSalary} у.е </br>`);


//2
var arr = {
    'ru':['голубой', 'красный', 'зеленый'],
    'en':['blue', 'red', 'green'],
};

var blue = arr['ru'][0];
document.write(`Нулевой элемент в ключе 'ru' - ${blue} </br>`);


//3
var arr = {
    'ru':['голубой', 'красный', 'зеленый'],
    get color(){
        return this['ru'];
    },
    set color(colors){
        this['ru'].push(colors);
    }
};

arr.color = 'black';
console.log('newColor -->', arr.color);