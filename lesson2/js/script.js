

//1. Дан код:

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
// Инкремент, если используется префиксная форма то сначала увеличиваем на еденицу
// после чего возращаем значение операнду "a" и присваиваем увеличенное значение
// перемнной "c"

d = b++; alert(d);           // 1
// Инкремент, если операция используется как постфикс, с оператором после операнда
// сначало присваиваем значение переменной "d", а затем увеличивается на единицу

c = (2+ ++a); alert(c);      // 5
// У нас в пременной "a" уже есть увеличиная еденица до 2 теперь мы берем цивру 2
// увеличиваем ещё на еденицу получаем 3 и прибовляем к двойке после присваиваем полученное
// значение к переменной "c"

d = (2+ b++); alert(d);      // 4
// У нас уже есть увеличенная еденица переменной "b" до 2
// теперь мы сначало делаем сложение получаем 4 и присваиваем переменной "d"
// после чиго увеличиваем 2 в переменной "b" до 3

alert(a);                    // 3
// В третьем примере мы мы получили цифру 3 и сохронили эту запись в переменной "a"

alert(b);                    // 3
// В четвертом примере мы увеличали переменную "b" c двух до 3 и сохронили эту запись в переменной "b"



//2. Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2);  // 5
// Сначало делаем делаем умножение и присваение 2 * 2 = 4 потом сложение 1 + 4 = 5 и присваиваем переменной "x"



// 3 Задача
var a = 10;
var b = 3;
if (a > 0 && b > 0) {
    d = a - b;
    alert(d);
} else if (a < 0 && b < 0){
    d = a * b;
    alert (d);
} else if (a > 0 && b < 0 || a < 0 && b > 0) {
    d = a + b;
    alert (d);
}


// 4 Задача

var a = +prompt('Введите число от 1 до 15')
switch (a) {
    case 1:
        alert ( 'Ваше число 1');
        break;
    case 2:
        alert ( 'Ваше число 2');
        break;
    case 3:
        alert ( 'Ваше число 3');
        break;
    case 4:
        alert ( 'Ваше число 4');
        break;
    case 5:
        alert ( 'Ваше число 5');
        break;
    case 6:
        alert ( 'Ваше число 6');
        break;
    case 7:
        alert ( 'Ваше число 7');
        break;
    case 8:
        alert ( 'Ваше число 8');
        break;
    case 9:
        alert ( 'Ваше число 9');
        break;
    case 10:
        alert ( 'Ваше число 10');
        break;
    case 11:
        alert ( 'Ваше число 11');
        break;
    case 12:
        alert ( 'Ваше число 12');
        break;
    case 13:
        alert ( 'Ваше число 13');
        break;
    case 14:
        alert ( 'Ваше число 14');
        break;
    case 15:
        alert ( 'Ваше число 15');
        break;
}

// 5 задача

var a = 2;
var b = 3;
function plus(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function dilenie (a, b) {
    return a / b;
}
function umnojenie (a, b) {
    return a * b;
}

// 6 Задача

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case 'сложение':
            return arg1 + arg2;
            break;
        case 'вычитание':
            return arg1 - arg2;
            break;
        case 'деление':
            return arg1 / arg2;
            break;
        case 'умножение':
            return arg1 * arg2;
            break;
    }
}