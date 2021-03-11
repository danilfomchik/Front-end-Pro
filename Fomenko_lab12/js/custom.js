var commentDiv = document.querySelector("div#comment");
var createClass = commentDiv.setAttribute('class', 'commentStyle');

var commentImage = document.createElement('img');
commentImage.setAttribute('name', 'img');
commentImage.setAttribute('src', './pictures/stickerwall.png');
commentImage.setAttribute('alt', ' ');
commentDiv.appendChild(commentImage);

var title = document.createElement("h1");
var titleText = document.createTextNode("Создание сайта ");
title.appendChild(titleText);
commentDiv.appendChild(title);

var subTitle = document.createElement("h3");
var subTitleText = document.createTextNode('Руководитель отдела маркетинга компании "Sticker Wall"');
subTitle.appendChild(subTitleText);
commentDiv.appendChild(subTitle);

var firstParagraph = document.createElement("p");
var firstParagraphText = document.createTextNode("Спасибо команде за качественно проделанную работу. Сайт был сдав в оговоренные сроки и без единого бага.");
firstParagraph.appendChild(firstParagraphText);
commentDiv.appendChild(firstParagraph);

var secondParagraph = document.createElement("p");
var secondParagraphText = document.createTextNode("Рад, что друзья посоветовали именно вас!");
secondParagraph.appendChild(secondParagraphText);
commentDiv.appendChild(secondParagraph);


