// Задание 1.
/*var obj = [0];
var x = +prompt('введите число от 0 до 999', 654);
if (x > 999 || x < 0) {
    alert(obj);
}
else if (x !== x) {
    alert('Неверный ввод');
}
else {
obj = transform();
console.log(obj);
function transform() {
    obj = {
        hundreds: 0,
        dozens: 0,
        units: 0,
    }

    for (var i = 0; i < 3; i++) {
        y = x % 10;
        x = (x - y) / 10;
        if (i === 0) {
            obj.units = y;
        } else if (i === 1) {
            obj.dozens = y;
        } else {
            obj.hundreds = y;
        }
    }
    return obj;
}
}*/

//Задача №2

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

console.log('В вашей корзине: ' +sumItems + items + ' на сумму ' + sumPrice + ' $.');
console.log('Из них:');
for (var i = 0; i < basket.length; i++) {
    console.log(+(i+1) + '. ' + basket[i].amount + ' ' + basket[i].productId + ' на сумму ' + products[basket[i].productId].price * basket[i].amount + ' $.');
}
