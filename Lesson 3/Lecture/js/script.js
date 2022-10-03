let a = 6;

// if (a > 9) {
//   //True
//   console.log('Yes');
// } else {
//   console.log('else');
// }

const button = document.querySelector('button'),
    input = document.querySelector('.age');

// () => {} стрелочная функция
button.onclick = () => {
    let num = +input.value;
    if (num >= 16 && num < 60) {
        console.log('Welcome');
    } else if (num >= 60) {
        console.log('Ты точно сюда?');
    } else {
        console.log('Ты не пройдешь!!!');
    }

    switch (num) {
        case 15:
            console.log('Еще год потерпи');
            break;
        case 16:
            console.log('Ураааа можно!!!');
            break;
        default:
            console.log('oooook');
    }
}

let b = 3;

console.log(b > 3 && b < 7); // && - оператор И
console.log(b > 3 || b < 7); // || - оператор ИЛИ