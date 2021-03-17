var commentDiv = document.querySelectorAll('div.pane');

for(i = 0; i < commentDiv.length; i++){
    addImg(commentDiv[i], commentDiv);
};

function addImg(commentDiv){
    var deleteImg = document.createElement('img');
    deleteImg.setAttribute('src', './pictures/delete.gif');
    deleteImg.setAttribute('alt', ' ');
    deleteImg.setAttribute('class', 'deleteImg');
    commentDiv.appendChild(deleteImg);

    deleteImg.onclick = function(){
        this.parentNode.parentNode.removeChild(this.parentNode);
    }
}

