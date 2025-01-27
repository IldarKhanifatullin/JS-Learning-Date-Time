/* // ======= Theory

const now = new Date(); // покажет настоящую дату и время
console.log(now); 

const start = new Date(0); // покажет начальную дату и время (для js)
console.log(start);

const definite = new Date((1000 * 60 * 60 * 24 * 365 * 3 + 1000 * 60 * 60 * 24 * 366) * 14 // покажет посчитанную дату и время
- 1000 * 60 * 60 * 24 * 340 - 1000 * 60 * 60 * 4 - 1000 * 60 * 15 - 1000 * 30)
console.log(definite);

const date = new Date(2025, 0, 25, 23, 15, 30) // покажет выбранную дату и время
console.log(date);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

now.setFullYear(2030)
console.log(now);

const now1 = Date()
console.log(now1); // тоже выводит, даже без "new"

// now1.setFullYear(2030)
// console.log(now1); // error, потому что без "new" менять настоящие данные нельзя

// new - это оператор в js, который создает новый объект

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString()); */

// ======= Date-Time

const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

/* // 1 попытка самостоятельной работы

const now = new Date()

output.textContent = now

setInterval(() => output.textContent = now, 1000);

fullBtn.onclick = function () {
    return output.textContent = now
}
dateBtn.onclick = function () {
    return output.textContent = now.toLocaleDateString()
}
timeBtn.onclick = function () {
    return output.textContent = now.toLocaleTimeString()
} // кнопки работают, но через секунду снова выводит в "полный" режим (это понятно)
// и время не идет, возможно некорректное использование метода "setInterval()" */

/* // 2 попытка самостоятельной работы

output.textContent = new Date();

setInterval(() => output.textContent = new Date(), 1000);

function format(formatMode) {

    const now = formatMode

    if (now === 'full') {
        return setInterval(() => output.textContent = new Date(), 1000)
    } else if (now === 'date') {
        return setInterval(() => output.textContent = new Date().toLocaleDateString(), 1000)
    } else if (now === 'time') {
        return setInterval(() => output.textContent = new Date().toLocaleTimeString(), 1000)
    }
}

fullBtn.onclick = format('full')
dateBtn.onclick = format('date')
timeBtn.onclick = format('time') // код работает некорректно, не происходит желаемое, 
// возможно снова некорректное использование метода "setInterval()" 
// или некорректный вызов объекта "new Date()" */

/* // 3 попытка самостоятельной работы

output.textContent = new Date();

setInterval(() => output.textContent = new Date(), 1000);

function format(formatMode) {

    const now = new Date();

    if (formatMode === 'full') {
        return setInterval(() => output.textContent = now, 1000)
    } else if (formatMode === 'date') {
        return setInterval(() => output.textContent = now.toLocaleDateString(), 1000)
    } else if (formatMode === 'time') {
        return setInterval(() => output.textContent = now.toLocaleTimeString(), 1000)
    }
}

fullBtn.onclick = format('full')
dateBtn.onclick = format('date')
timeBtn.onclick = format('time') // то же самое с незначительными изменениями в функции */

/* // 4 попытка самостоятельной работы

let mode = 'nothing';

output.textContent = format(mode);

setInterval(() => output.textContent = format(mode), 1000);

function format(formatMode) {

    const now = new Date();

    if (formatMode === 'fullMode') {
        return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
    } else if (formatMode === 'dateMode') {
        return now.toLocaleDateString()
    } else if (formatMode === 'timeMode') {
        return now.toLocaleTimeString()
    } else {
        return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
    }
}

fullBtn.onclick = function() {
    mode = 'fullMode'
    update()
}

dateBtn.onclick = function() {
    mode = 'dateMode'
    update()
}

timeBtn.onclick = function() {
    mode = 'timeMode'
    update()
}
// все работает как надо, но можно еще больше упростить код */

// 5 попытка самостоятельной работы

let mode = 'nothing';

update();

setInterval(() => update(), 1000);

function update() {
    output.textContent = format(mode)
}

function format(formatMode) {

    const now = new Date();

    switch (formatMode) {
        case 'fullMode':
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        case 'dateMode':
            return now.toLocaleDateString()
        case 'timeMode':
            return now.toLocaleTimeString()
        default:
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
    }
}

function bindMode(name) {
    return function() {
        mode = name
        update()
    }
}

fullBtn.onclick = bindMode('fullMode')

dateBtn.onclick = bindMode('dateMode')

timeBtn.onclick = bindMode('timeMode')