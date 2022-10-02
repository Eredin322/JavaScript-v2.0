// Домашнее задание
// Task 1
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

// let a = 7,
//   b = 9;
// console.info(a * b);

// Task 2
// Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
// let c = 7,
//   d = 9;
// console.log(c / d);

// Task 3
// Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.
// let e = 3,
//   f = 5;
// console.log(e + f);

// Task 4
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу.
// let e1 = '3',
//   f1 = 5;
// console.log(e1 + f1);

// Task 5
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.
// let e2 = 3,
//   f2 = 0;
// console.log(e2 / f2);

// Task 6
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных.
// let e3 = 3,
//   f3 = 'Hello';
// console.log(e3 + f3);
// console.log(f3 + e3);

// Task 7
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.
// let e4 = 3,
//   f4 = 'Hello'
// console.log(e4 * f4);

// Task 8
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
// let input = document.querySelector('.input-in');
// let button = document.querySelector('#btn1');
// button.onclick = function () {
//   console.log(input.value);
// }

// Task 9
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

// let input1 = document.querySelector('.input-out');
// let button2 = document.querySelector('#btn2');
// let result = document.querySelector('.result');
// button2.onclick = function () {
//   result.innerHTML = input1.value;
//   input1.value = "";
// }

// Task 10
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

// let input1 = document.querySelector('.input-out');
// let button2 = document.querySelector('#btn2');
// let result = document.querySelector('.result');
// button2.onclick = function () {
//   result.innerHTML = input1.value * 10;
//   input1.value = "";
// }

// Task 11
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10.

// let input1 = document.querySelector('.input-out');
// let button2 = document.querySelector('#btn2');
// let result = document.querySelector('.result');
// button2.onclick = function () {
//   result.innerHTML = +input1.value + 10;
//   input1.value = "";
// }

// Task 12
// Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

// let input_name = document.querySelector('.input_in');
// let input_surname = document.querySelector('.input_out');
// let btn = document.querySelector('#btn2');
// btn.onclick = function () {
//   let result = 'Hello ' + input_name.value + ' ' + input_surname.value;
//   console.log(result);
// }


// Task 13
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу.

// let number1 = document.querySelector('input1'),
//   number2 = document.querySelector('input2'),
//   btn = document.querySelector('button'),
//   result = document.querySelector('.result');

// btn.onclick = function () {
//   result.innerHTML = number1.value * number2.value;
// }


// Task 14
// Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

// let input1 = document.querySelector('input');
// input1.value = 'Hello';

// Task 15
// Создайте input и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

// let y = document.querySelector('input');
// y.style.border = '5px solid red'; // Меняет стили бордера

// Task 16
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел.

// let number1 = document.querySelector('.input-1'),
//   number2 = document.querySelector('.input-2'),
//   btn = document.querySelector('.button'),
//   result = document.querySelector('.result');

// btn.onclick = function () {
//   result.innerHTML = +number1.value + +number2.value;
// }

// Task 17
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
// let t;
// let btn = document.querySelector('button');

// btn.onclick = function () {
//   t = document.querySelector('input').value,
//     t = parseInt(t);
//   console.info(t);
// }


// Task 18
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

// let t;
// let btn = document.querySelector('button');

// btn.onclick = function () {
//   t = document.querySelector('input').value,
//     t = parseFloat(t);
//   console.info(t);
// }



// Task 19
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

// let result = document.querySelector('.result'),
//     input1 = document.querySelector('.input1'),
//     input2 = document.querySelector('.input2'),
//     btn = document.querySelector('button');

// btn.onclick = function () {
//     result.innerHTML = parseInt(input1.value) + parseInt(input2.value);
// }

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

let input_name = document.querySelector('.input_name'),
    input_surname = document.querySelector('.input_surname'),
    age = document.querySelector('.age'),
    input_job = document.querySelector('.input_job'),
    result = document.querySelector('.result'),
    btn = document.querySelector('button');

btn.onclick = function () {
    result.innerHTML = 'Уважаемый' + ' ' + input_name.value + ' ' + input_surname.value + ', ваш возраст ' + age.value + ' года, по професси вы ' + input_job.value;
}