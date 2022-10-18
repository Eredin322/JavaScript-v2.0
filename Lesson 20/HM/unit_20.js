
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {
    let out = document.querySelector('.out-1');
    console.log(event);
    out.innerHTML += event.key;
}
document.querySelector('.i-1').onkeypress = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
    let out = document.querySelector('.out-2');
    out.innerHTML += event.code;
}
document.querySelector('.i-2').onkeypress = t2;
// ваше событие здесь!!!


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(event) {
    let out = document.querySelector('.out-3');
    for (let i = 0; i < 10; i++){
        if (event.code == `Digit${i}`){
            out.innerHTML = true;
            break;
        } else {
            out.innerHTML = false;
        }
    }
    console.log(event);
}
document.querySelector('.i-3').onkeypress = t3;

// ваше событие здесь!!!


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(event) {
    let out = document.querySelector('.out-4');
    out.innerHTML += event.key.toLowerCase();
}
document.querySelector('.i-4').onkeypress = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(event) {
    let out = document.querySelector('.out-5');
    out.innerHTML += event.key.toUpperCase();
}
document.querySelector('.i-5').onkeypress = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */
let i6 = document.querySelector('.i-6');
function t6(event) {
    event.preventDefault();
    i6.value += event.key.toLowerCase();
}
i6.onkeypress = t6
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
    const a7 = [5,'a',6,4.4,'b','d','c'];
    let out = document.querySelector('.out-7');
    let rand = 0 - 0.5 + Math.random() * ((a7.length-1) - 0 + 1);
    rand = parseInt(rand);
    console.log(rand);
    out.innerHTML += a7[rand];
}
document.querySelector('.i-7').onkeydown = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(event) {
    let out = document.querySelector('.out-8');
    const change = {
        i: 1,
        o: 0,
        l: 7,
    }
    if (change[event.key] != undefined){
        out.innerHTML += change[event.key];
    } else {
        out.innerHTML += event.key;
    }
}
document.querySelector('.i-8').onkeypress = t8;
// ваше событие здесь!!!


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let count9 = 0;

function t9(event) {
    let out = document.querySelector('.out-9');
    if (event.key = 'ArrowDown'){
        count9 = count9 + 1;
    }
    console.log(event);
    out.innerHTML = count9;
}
document.querySelector('.i-9').onkeydown = t9;
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let w = 75;
let h = 75;
let img10 = document.querySelector('.div-10 img');
function t10(event) {
    console.log(event);
    if (event.key == "ArrowLeft" || event.key == 'ArrowRight'){
        w++;
    } else if (event.key == "ArrowUp" || event.key == 'ArrowDown'){
        h++;
    }
    img10.style.width = w + 'px';
    img10.style.height = h + 'px';

}
document.querySelector('.i-10').onkeydown = t10;
// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11(event) {
    console.log(event);
    let allKeys = document.querySelectorAll('li');
    for(let i = 0; i < allKeys.length; i++){
        allKeys[i].classList.remove('active');
    }
    let pressedKey = '';
    if(event.code == `Digit${event.key}`){
        pressedKey = document.querySelector(`.${event.code}`);
    } else {
        pressedKey = document.querySelector(`.${event.key}`);
    }
    console.log(event);
    console.log(pressedKey);
    pressedKey.classList.add('active');
}

document.querySelector('.i-11').onkeydown = t11;
// ваше событие здесь!!!

