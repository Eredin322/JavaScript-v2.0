
// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

function t1() {
    let hello = new Promise((resolve, reject) => {
        fetch('https://iluha-bandit.ru/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1')
        .then(response => resolve(response.text()));
    })
    let hello_name = new Promise((resolve, reject) => {
        fetch('https://iluha-bandit.ru/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=ILUHA')
        .then(response => resolve(response.text()))
    })

    Promise.all([hello,hello_name]).then(response => {
        console.log(response)
    })
}
document.querySelector('.b-1').onclick = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {
    let action3 = new Promise((resolve,reject) => {
        fetch('https://iluha-bandit.ru/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=3&num1=4&num2=8')
        .then(response => resolve(response.text()))
    })
    let action4 = new Promise((resolve,reject) => {
        fetch('https://iluha-bandit.ru/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=4&num1=4&num2=19')
        .then(response => resolve(response.text()))
    })
    Promise.all([action3,action4]).then(data => {
        console.log(data);
    })
}
document.querySelector('.b-2').onclick = t2;
// ваше событие здесь!!!


// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
    let a5 = new Promise((resolve,reject) => {
        fetch('https://iluha-bandit.ru/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=5')
        .then(response => resolve(response.text()))
    })
    let a6 = new Promise((resolve, reject) => {
        fetch('https://iluha-bandit.ru/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=6&num1=12&num2=188')
        .then(response => resolve(response.text()))
    })
    Promise.all([a5,a6]).then(value => {
        console.log(value);
    })
}
document.querySelector('.b-3').onclick = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
    let a7 = new Promise((resolve, reject) => {
        fetch('https://iluha-bandit.ru/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=7')
        .then(response => resolve(response.text()))
    })
    let a8 = new Promise ((resolve, reject) => {
        fetch('https://iluha-bandit.ru/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=8&year=2000')
        .then(response => resolve(response.text()))
    })
    Promise.all([a7,a8]).then(value => console.log(value));
}
document.querySelector('.b-4').onclick = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
    let p1 = new Promise((resolve, reject) => {
        fetch('https://iluha-bandit.ru/index2.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=1'
        })
        .then(response => resolve(response.text()))
    })
    let p2 = new Promise((resolve, reject) => {
        fetch('https://iluha-bandit.ru/index2.php',{
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=Илька'
        })
        .then(response => resolve(response.text()))
    })
    Promise.all([p1, p2]).then(value => console.log(value));
}
document.querySelector('.b-5').onclick = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
    let p3 = new Promise((resolve, reject) => {
        fetch('https://iluha-bandit.ru/index2.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=3&num1=5&num2=10'
        })
        .then(response => resolve(response.text()))
    })
    let p4 = new Promise((resolve, reject) => {
        fetch('https://iluha-bandit.ru/index2.php',{
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=4&num1=5&num2=10'
        })
        .then(response => resolve(response.text()))
    })
    Promise.all([p3, p4]).then(value => console.log(value));
}
document.querySelector('.b-6').onclick = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
    let p5 = new Promise((resolve, reject) => {
        fetch('https://iluha-bandit.ru/index2.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=5'
        })
        .then(response => resolve(response.text()))
    })
    let p6 = new Promise((resolve, reject) => {
        fetch('https://iluha-bandit.ru/index2.php',{
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=6&num1=5&num2=10'
        })
        .then(response => resolve(response.text()))
    })
    Promise.all([p5, p6]).then(value => console.log(value));
}
document.querySelector('.b-7').onclick = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
    let p7 = new Promise((resolve, reject) => {
        fetch('https://iluha-bandit.ru/index2.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=7'
        })
        .then(response => resolve(response.text()))
    })
    let p8 = new Promise((resolve, reject) => {
        fetch('https://iluha-bandit.ru/index2.php',{
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=8&year=2000'
        })
        .then(response => resolve(response.text()))
    })
    Promise.all([p7, p8]).then(value => console.log(value));
}
document.querySelector('.b-8').onclick = t8;
// ваше событие здесь!!!

