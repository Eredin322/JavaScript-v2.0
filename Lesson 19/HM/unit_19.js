
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
    let out = document.querySelector('.div-1').innerHTML;
    document.querySelector('.out-1').innerHTML = out;
}

document.querySelector('.div-1').onclick = t1;

// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(event) {
    let out = document.querySelector('.out-2');
    out.innerHTML = event.altKey;
}
document.querySelector('.div-2').onclick = t2;
// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;
let div3 = document.querySelector('.div-3');
function t3() {
    let out = document.querySelector('.out-3');
    w3 = w3 + 5;
    div3.style.width = w3 + 'px';
    out.innerHTML = w3;
}
div3.onclick = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
    let out = document.querySelector('.out-4');
    out.innerHTML = document.querySelector('.div-4').innerHTML;
}

document.querySelector('.div-4').ondblclick = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

let div5 = document.querySelector('.div-5');

function t5() {
    div5.classList.toggle('active');
}

div5.ondblclick = t5;

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

let div6 = document.querySelector('.div-6');
let ul6 = document.querySelector('.ul-6');

function t6() {
    ul6.classList.toggle('hide');
}

div6.ondblclick = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

let div7 = document.querySelector('.div-7');

function t7() {
    div7.classList.toggle('active');
}

div7.oncontextmenu = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */
let ch8 = document.querySelector('.ch-8');

function t8() {
    if(ch8.checked == true){
        document.oncontextmenu = () => {
            return false;
        }
    } else {
        document.oncontextmenu = () => {
            return true;
        }
    }
}

ch8.onchange = t8;


// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

let div9 = document.querySelector('.div-9');

function t9() {
    let img = document.querySelector('.div-9 img');
    img.setAttribute('src', 'img/2.png');
}

div9.oncontextmenu = t9;

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

let div10 = document.querySelector('.div-10');

function t10() {
    let img = document.querySelector('.div-10 img');
    img.setAttribute('src', 'img/2.png');
}

div10.onmouseenter = t10;

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

let div11 = document.querySelector('.div-11');

function t11() {
    let img = document.querySelector('.div-11 img');
    img.setAttribute('src', 'img/2.png');
    div11.onmouseleave = () => {
        img.setAttribute('src', 'img/1.png');
    }
}

div11.onmouseenter = t11;
// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

document.querySelector('.div-12').onmousedown = () => {
    document.querySelector('.div-12').classList.toggle('active');
}
// () => {

// }

// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

let div13 = document.querySelector('.div-13');

div13.onmousedown = () => {
    div13.classList.add('active');
}

div13.onmouseup = () => {
    div13.classList.remove('active');
}
// () =>  {

// }

// () =>  {

// }
// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */
let div14 = document.querySelector('.div-14');
function t14() {
    div14.onclick = () => {
        div14.classList.toggle('active');
    }
}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
let div15 = document.querySelector('.div-15');
let i15 = 1;
function t15() {
    i15++;
    div15.innerHTML = i15;
}
div15.onmousemove = t15;
// ваше событие здесь!!!


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
let div16 = document.querySelector('.div-16');
let w16 =  75;
function t16() {
    w16 = w16 + 1;
    div16.style.width = w16 + 'px';
}
div16.onmousemove = t16;
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
    div16.onmousemove = t16;
}
function t17Off() {
    div16.onmousemove = '';
}
document.querySelector('.b-17_on').onclick = t17On;
document.querySelector('.b-17_off').onclick = t17Off;

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */
let div18 = document.querySelector('.div-18');
function t18() {
    div18.innerHTML = parseInt(div18.clientWidth);
    console.log(div18.style.width);
}
div18.onmouseenter = t18;
// ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
let div19 = document.querySelector('.div-19');
function t19() {
    // let out = document.querySelector('.out-19');
    // out.innerHTML = div19.classList;
    div19.classList.toggle('active');
}
div19.onmouseout = t19;
// ваше событие здесь!!!


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
let prog = document.querySelector('progress');
let a = 10;
function t20() {
    a++;
    prog.value = a;
}
prog.onmousemove = t20;
// ваше событие здесь!!!