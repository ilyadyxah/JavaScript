// Задание 1
/*var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 вывод значения a+1, т.к. ++ стоит перед переменной
d = b++; alert(d);           // 1 вывод значения b, т.к. ++ стоит после переменной
c = (2+ ++a); alert(c);      // 5 было выполнено два раза выполнение операции ++a до присваивания c
d = (2+ b++); alert(d);      // 4 было выполнено одно выполнение b+1 до присваивания d
alert(a);                    // 3 было выполнено два выполнения ++a
alert(b);                    // 3 было выполнено два выполнения ++b*/

// Задание 2
/* var a = 2;
var x = 1 + (a *= 2); // 5 сначала выполняется выражение в скобках - умножение и присваивание, затем сложение и присваивание
alert(x)*/

// Задание 3
/*
var a;
var b;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
a = getRandomInt(100);
b = -50;

if ((a => 0) && (b => 0)) {
    alert('Оба положительные '+ +(a-b));
}
else if ((a < 0) && (b < 0)) {
    alert('Оба отрицательные '+ +(a*b));
}
else {
    alert('Разные знаки '+ +(a+b));
}*/

// Задание 4
/*var a;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
a = getRandomInt(15);
switch (a) {
    case 0:
        console.log('0');
    case 1:
        console.log('1');
    case 2:
        console.log('2');
    case 3:
        console.log('3');
    case 4:
        console.log('4');
    case 5:
        console.log('5');
    case 6:
        console.log('6');
    case 7:
        console.log('7');
    case 8:
        console.log('8');
    case 9:
        console.log('9');
    case 10:
        console.log('10');
    case 11:
        console.log('11');
    case 12:
        console.log('12');
    case 13:
        console.log('13');
    case 14:
        console.log('14');
    case 15:
        console.log('15');
        break;

    default:
        console.log('неверный ввод');
        break;
}*/

/*// Задание 5 и 6

function add(a, b) {
    return (a+b);
}
function sub(a, b) {
    return (a-b);
}
function div(a, b) {
    return (a/b);
}
function mult(a, b) {
    return (a*b);
}
x = +prompt('Введите первое значение', [0]);
y = +prompt('Введите второе значение', [0]);

console.log (add(x,y));
console.log (sub(x,y));
console.log (div(x,y));
console.log (mult(x,y)); // Вывод значений для 5-го задания

var oper;
var c;
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return add(arg1, arg2);
            break;
        case 'вычитание':
            return sub(arg1, arg2);
            break;
        case 'деление':
            return div(arg1, arg2);
            break;
        case 'умножение':
            return mult(arg1, arg2);
            break;
        default:
            alert('Неверно введена операция. Введите как в скобках!');
    }
}
oper = prompt('Напишите операцию (сложение, вычитание, умножение, деление', ['сложение']);
c = mathOperation(x, y, oper);
console.log(c);
alert('Ответ = ' +c);*/

/*
// Задание 7
alert( null > 0 );  // false.
alert( null == 0 ); // false.
alert( null >= 0 ); // true. Причина в том, что нестрогое равенство и сравнения > < >= <= работают по-разному. Сравнения преобразуют null в число, рассматривая его как 0. Поэтому выражение null >= 0 истинно, а null > 0 ложно. Вычитал теорию, что если null не < 0, значит null >= 0;*/


// Задание 8
/*
var a ;
var b ;
a = +prompt('введите число основание = ', [2]);
b = +prompt('введите число степень = ', [2]);
function power(x, y){
 if (y === 1) {
        return x;
    }
    else {
        return x * power(x,y-1);
    }
}

alert('power('+b+') = '+power(a, b));*/
