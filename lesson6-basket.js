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

var basket = [];

var sumPrice = 0;
var sumItems = 0;

// Изменение слова "товар" в зависимости от числа
function getItems() {
    if (sumItems > 2 && sumItems <= 4) {
        return items = ' товара';
    }
    else if (sumItems === 0 || sumItems > 4) {
        return items = ' товаров';
    }
    else {
        return items = ' товар';
    }
}

// Функция расчёта стоимости товаров корзине
function calcBasketPrice() {
    var countPrice = 0;
    for (var i = 0; i < basket.length; i++) {
        countPrice += basket[i].price * basket[i].amount;
    }
    return countPrice;
}

// Функция расчёта количества товаров в корзине
function calcBasketItems() {
    var countItems = 0;
    for (var i = 0; i < basket.length; i++) {
        countItems += basket[i].amount;
    }
    return countItems;
}

// Обработчик нажатия "Купить"
function buyHandler() {
    var match;
    if (basket.length === 0) {
        basket.push({productId: this.id, price: products[this.id].price, amount: 1});
    }
    else {
        for (var key in basket) {
            if (basket[key].productId === this.id) {
                basket[key].amount += 1;
                match = true;
                break;
            }
            else match = false;
        }
        if (match === false) {
            basket.push({productId: this.id, price: products[this.id].price, amount: 1});
        }
    }

    sumPrice = calcBasketPrice();
    sumItems = calcBasketItems();
    document.getElementById('basket').innerHTML = '';
    watchBasket();
}

// Создание блока расчёта суммы товара
function watchBasket() {
    // Написание титула корзины
    var divBasket = document.getElementById('basket');
    var el = document.createElement('div');
    el.innerHTML = 'Корзина';
    el.classList.add('product-title');
    divBasket.appendChild(el);
    divBasket = document.getElementById('basket');
    var el = document.createElement('div');
    el.innerHTML = 'В вашей корзине: ' + sumItems + getItems() + ' на сумму ' + sumPrice + ' $.';
    el.classList.add('product-title');
    divBasket.appendChild(el);

// Вывод подробностей заказа (по каждому товару)
    for (var i = 0; i < basket.length; i++) {
        var el = document.createElement('div');
        el.innerHTML = (i + 1) + '. ' + basket[i].amount + ' ' + basket[i].productId + ' на сумму ' + basket[i].price * basket[i].amount + ' $.';
        divBasket.appendChild(el);
        el.classList.add('product-title');
    }
}

sumPrice = calcBasketPrice();
sumItems = calcBasketItems();
getItems();

// Написание титула каталога
var divCatalog = document.getElementById('catalog');
var el = document.createElement('div');
el.innerHTML = 'Каталог товаров';
el.classList.add('product-title');
divCatalog.appendChild(el);

// Вывод наимнований доступных товаров
for (var item in products) {
    var el = document.createElement('div');
    el.classList.add('product-items');
    el.innerHTML = products[item].name;
    divCatalog.appendChild(el);

    // Вывод кнопки покупки товара
    var el = document.createElement('button');
    el.innerHTML = 'Купить';
    el.id = item;
    el.addEventListener('click', buyHandler);
    divCatalog.appendChild(el);
}
watchBasket(); //Вывод динамической части корзины






