/*// Задача №1.
var n = 100;
var i = 2;
var j;
var counter;
while (i <= n) {
        i++;
        j = 0;
        counter = 0;
        while (j <= i) {
            j++;
            if (i % j === 0 && j < i) {
                counter++;
                continue;
            }
            else if (i === j && counter === 1) {
                console.log(i);
            }
            }
}*/

/*//Задача №2 и 3.
var products = ['shirt', 'cap', 'shorts', 'jacket'];
var price = [10, 15, 20, 30];
var countprice = 0;
var sumprice;


function countBasketPrice() {
    for (var i = 0; i < products.length; i++) {
        countprice += price[i];
    }
    return countprice;
}
sumprice = countBasketPrice();

if (products.length > 2 && products.length <= 4) {
    var items = ' товара';
}
    else if (products.length ===0 || products.length > 4) {
        items = ' товаров';
    }
    else items = ' товар';

    console.log('В вашей корзине: ' +products.length + items + ' на сумму ' + sumprice + ' $.');*/


/*
//Задача №4.
for (var i = 0; i <= 9; console.log(i++)) {}
*/



/*//Задача №5.
var row = [];
for (var i = 0; i < 20; i++) {
    for (var j = 0; j <= i; j++) {
        row.push('*');
    }
    console.log(row);
    row = [];
}*/
