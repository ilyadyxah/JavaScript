var products = {
    shirt: {
        name: 'shirt',
        price: 10
    },
    cap: {
        name: 'cap',
        price: 15
    },
    shorts: {
        name: 'shorts',
        price: 20
    },
    jacket: {
        name: 'jacket',
        price: 30
    }
}

var basket = [
    {
        productId: 'shirt',
        amount: 10
    },
    {
        productId: 'jacket',
        amount: 3
    }
]

var sumPrice;
var sumItems;

function countBasketPrice() {
    var countPrice = 0;
    for (var i = 0; i < basket.length; i++) {
        countPrice += products[basket[i].productId].price * basket[i].amount;
    }
    return countPrice;
}
function countBasketItems() {
    var countItems = 0;
    for (var i = 0; i < basket.length; i++) {
        countItems += basket[i].amount;
    }
    return countItems;
}
sumPrice = countBasketPrice();
sumItems = countBasketItems();

if (sumItems > 2 && sumItems <= 4) {
    var items = ' товара';
}
else if (sumItems ===0 || sumItems > 4) {
    items = ' товаров';
}
else {
    items = ' товар';
}

function outProducts() {
    divCatalog = document.getElementById('catalog');
    var el = document.createElement('div');
    el.innerHTML = 'Каталог товаров';
    el.classList.add('product-title');
    divCatalog.appendChild(el);
    for (var item in products) {
        var el = document.createElement('div');
        el.classList.add('product-items');
        el.innerHTML = products[item].name;
        divCatalog.appendChild(el);
    }

}

function outBasket() {
    divCatalog = document.getElementById('catalog');
    var el = document.createElement('div');
    el.innerHTML = 'Каталог товаров';
    el.classList.add('product-title');
    divCatalog.appendChild(el);
    for (var item in products) {
        var el = document.createElement('div');
        el.classList.add('product-items');
        el.innerHTML = products[item].name;
        divCatalog.appendChild(el);
    }

}

outProducts();
outBasket();

console.log('В вашей корзине: ' +sumItems + items + ' на сумму ' + sumPrice + ' $.');
console.log('Из них:');
for (var i = 0; i < basket.length; i++) {
    console.log(+(i+1) + '. ' + basket[i].amount + ' ' + basket[i].productId + ' на сумму ' + products[basket[i].productId].price * basket[i].amount + ' $.');
}

