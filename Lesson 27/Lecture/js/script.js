let a = new Promise((resolve, reject) => {
    fetch('https://iluha-bandit.ru/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1')
        .then(response => {
            resolve(response.text());
        })
})
let b = new Promise((resolve, reject) => {
    fetch('https://iluha-bandit.ru/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=ILUHA')
        .then(response => {
            resolve(response.text());
        })
})

Promise.all([a,b]).then(data => {
    console.log(data);
    console.log(data[0]);
    console.log(data[1]);
})

// a.then(response => {
//     console.log(response);
// });
// b.then(response => {
//     console.log(response);
// })