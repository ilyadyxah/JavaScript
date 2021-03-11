//Очистить div big_picture от содержимого.
//Прочесть имя картинки, по которой произошел клик.
//Найти соответствующую большую картинку.
//Поместить ее в div big_picture.

var currentNumberImage;
var images;

function slider(event) {
    var appDiv = document.getElementById("big_img");
    var way = event.target.id;
    if (way === 'left' && currentNumberImage > 1) {
        appDiv.src = "image/gallery/big/" + (currentNumberImage - 1) + ".jpg";
        currentNumberImage --;
    }
    else if (way === 'right' && currentNumberImage < (images.length - 1)) {
        appDiv.src = "image/gallery/big/" + (currentNumberImage + 1) + ".jpg";
        currentNumberImage ++;
    }
}

function changeBigPicture(event){
    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    var imageNameParts = event.target.id.split("_");
    currentNumberImage = +imageNameParts[1];
    var src = "image/gallery/big/" + currentNumberImage + ".jpg";
    var imageDomElement = document.createElement("img");
    imageDomElement.src = src;
    imageDomElement.id = 'big_img';
    appDiv.appendChild(imageDomElement);


    // Вывод кнопок по бокам
    var btnDiv = document.getElementById("big_picture");
    var el = document.createElement('button');
    el.innerHTML = '<';
    el.id = 'left';
    el.addEventListener('click', slider);
    btnDiv.appendChild(el);
    var el = document.createElement('button');
    el.innerHTML = '>';
    el.id = 'right';
    el.addEventListener('click', slider);
    btnDiv.appendChild(el);
}

function init(){
    images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }


}
window.onload = init;