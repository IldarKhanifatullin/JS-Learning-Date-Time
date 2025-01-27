// Numbers // работа с числами

/* const num1 = 42 // integer (целочисленный тип)
const num2 = 42.42 // float (число с десятичной частью (с плавающим значением))
const num3 = 42e3 // (число в 3 степени)
const num4 = 42_000_000 // (можно нижним подчеркиванием визуально выделять числа для удобства, это никак не изменит значение на выходе)
const num5 = -42
const num6 = '42'

console.log(num5); */

/* Number('42') // параметр (на самом деле это класс), представляющий собой метод (функцию), превращающий число в строке в определяемое число
console.log(Number(num6));
console.dir(Number) // .dir позволяет заглянуть под копот класса (Number) (В JavaScript все является объектом)
console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.pow(2,53)-1); // еще один глобальный объект. Метод pow() позволяет возвезти в определенную степень какое-то число
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(1/0);
console.log(Number.isFinite(1/0)); // функция спрашивает конечно ли это число
console.log(Number.isFinite(42));
console.log(42/'string');
console.log(42/'42');
const weirdNum = 23/undefined;
console.log(Number.isNaN(weirdNum));
console.log(Number.isNaN(23)); */

/* const strInt = '42'
const strFloat = '42.42'

console.log(Number(strInt));
console.log(Number(strFloat));

console.log(Number.parseInt(strInt)); // превращает строку с целым числом в целое число
console.log(Number.parseInt(strFloat)); // получаем только целую часть
console.log(Number.parseFloat(strFloat));
// parseInt и parseFloat можно использовать без Number.
console.log(parseInt(strInt));
console.log(parseFloat(strFloat));
console.log(+strInt, +strFloat); // "+" превращает строчку в число
console.log(0.1 + 0.2); // выдает с погрешностью. JS работает не совсем как калькулятор из-за своих особенностей
console.log((0.1 + 0.2).toFixed(2)); // фиксит количество чисел после запятой, но возвращает строчку, поэтому спереди ставим "+"
console.log(+(0.1 + 0.2).toFixed(2)); // превращает строчку в число и убирает все лишние нули после запятой при любом параметре .toFixed()
// еще можно так:
const fixed = (0.1 + 0.2).toFixed(2) 
console.log(parseFloat(fixed)); // тоже превращает сразу в число */

/* // BigInt // для работы с числами превосходящими MAX_SAFE_INTEGER

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER + 1_000_000_000_000_000); // в теории мы получаем неправильный результат, т.к. 
// в JS операции выше числа MAX_SAFE_INTEGER уже не имеют никакого смысла, поэтому оборачиваем в BigInt
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 1_000_000_000_000_000n); // Bigint - это отдельный тип данных, а мы 
// пытаемся сложить его с числом, поэтому выйдет ошибка; чтобы предотвратить ошибку в конце числа вставим "n"
console.log(typeof -42n); // BigInt может работать только с BigInt и он не может быть плавающим
// console.log(42.42n); // error
// console.log(10n - 4); //error
console.log(parseInt(10n)-4); // можно число BigInt перевести в простое целое число
console.log(10n - BigInt(4)); // можно простое целое число перевести в число BigInt
console.log(5n / 2n); // вместо 2.5 получаем 2, потому что BigInt - это целочисленный тип, и дробная часть просто отсекается */

/* // Math // математический метод

console.log(Math.PI);
console.log(Math.sqrt(25)); // функция метода Math по выведению корня
console.log(Math.abs(-42)); // берет модуль у числа (абсолютное число, без знаков)
console.log(Math.max(42, 23, 5, 2, 199, 0, 37, 1)); // можно писать сколько угодно значений и выведет наибольшее
console.log(Math.min(42, 23, 5, 2, 199, 0, 37, 1)); // по аналогии

const myNum = 4.9;

console.log(Math.floor(myNum));
console.log(Math.ceil(myNum));
console.log(Math.round(myNum));
console.log(Math.random()); */

const num7 = getRandomNumber(10, 100);

function getRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min) + min)
}

console.log(num7);