// В JavaScript есть 2 способа вызова функции

/* // 1. Function Declaration

greet('Ildar')

function greet(name) {
    console.log('Hello - ', name);
}
// можно сначала вызвать, а потом объявить; так работает function (такая внутренняя механика обработки скриптов в JavaScript:
// сначала делает первый проход, просматривает файл, записываает в регистр все что есть и видит что есть такая функция) */

/* // 2. Function Expression

// greet2('Ildar')

const greet2 = function (name) {
    console.log('Hello! - ', name);
}
// нельзя сначала вызвать, а потом объявить; так не работает const

greet2('Ildar')

console.log(typeof greet); // выведет function. Отдельного типа данных "Функция" в JS нет. Функция относится к объектам
// Тип данных функций - это Object. То есть JS подсказывает во время работы с помощью typeOf что это функция, но это не их тип

console.dir(greet);

// Атрибут - элемент, неотъемлемо принадлежащий по признаку к конкретному элементу
// Прототип - Первоначальный образец, элемент, давший начало определенной группе элементов (Базовый класс в JavaScript)

setTimeout(function() {
    console.log('Timeout');
}, 5000) // эта базовая функция JS отработает свою анонимную функцию через 5 секунд (5000 = 5 секунд)

setInterval(function() {
    console.log('Interval');
    
}, 5000) // в этом случае функция будет отрабатывать каждые 5 секунд

setInterval(function() {
    console.log(Math.random());
    
}, 5000) */

/* let counter = 0

const interval = setInterval(function() {
if (counter === 5) {
    clearInterval(interval)
} else {
    console.log(++counter); // ++counter - будет считаться от 1 до 5; counter++ - будет считаться от 0 до 4
    }
}, 2000)
// нужно быть очень внимательным с этим */

/* // Arrow functions // стрелочная функция

const arrow = (name) => {
    console.log('Hello - ', name);
};

arrow('Ildar');

const arrow2 = name => console.log('Hello! - ', name);

arrow2('Ilham');

function somePow(num, exp) {
    return Math.pow(num, exp)
}

console.log(somePow(2, 3));

const somePow2 = (num, exp) => Math.pow(num, exp);

console.log(somePow2(3, 3)); */

/* // ======= Default Parameters

const sum = (a = 10, b = a / 2) => a + b // 10 и "a / 2" (5) - это резервные значения

console.log(sum(40, 2)); // выдаст 42, сложив заданные значения

console.log(sum()); // выдаст 15, сложив резервные значения, так как заданных значений нет

function turnIntoArray(... array) { // "..." - это оператор Rest, он говорит: 
// "Все параметры, которые ты передаешь мне в функцию, я положу в массив (numbers)"
console.log(array);
}
turnIntoArray(1, 2, 3, 4, 5);

function sumAll(... numbers) {

    // let result = 0

    // 1й вариант:
    // for (let num of numbers) {
    //     result += num
    // }

    // 2ой вариант:
    // for (let i = 0; i < numbers.length; i++) {
    //     result = result + numbers[i]
    // }

    // return result

    // 3й вариант
    return numbers.reduce((acc, cur) => acc += cur, 0)
}

console.log(sumAll(42, 23, 37, 15, 1, 199)); */

// ======= Closures (Замыкания)

function createPerson(firstName) {
    return function(lastName) {
        console.log(firstName + ' ' + lastName); // внутри функции есть дугая фукция, 
        // и первая функция замыкает внутри второй значение "name", по сути это и есть замыкание.

    } // мы объявили функцию с названием и параметром и по сути указали ему быть безымянной функцией с другим параметром
    // (которому в свою очередь указали быть выводом на консоль этих параметров). 
    // Функция есть результат его выполнения, а return - это то, что возвращает конечный результат.
}

const addLastName = createPerson('Ildar'); // мы объявили константу и присвоили ему выполение той функции с конкретным параметром,
// а точнее указали ему быть результатом выполнения той функции с конкретным значением параметра.
// А результат - это та безымянная функция со своим параметром, то есть фактически константа - это та внутренняя функция
// Получается addLastName = function(lastName), а внутри этой функции уже вставилось имя 'Ildar' "
// И теперь когда мы вызовем эту константу, которая является функцией(), вставив в ее скобки конкретное значение, 
// мы обратимся именно к параметру внутренней функции.

addLastName('Khanifatullin');

