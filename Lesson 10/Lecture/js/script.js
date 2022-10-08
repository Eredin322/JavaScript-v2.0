// let zodiak = ['Козерог',1, 1, 19];
// let man = ['Ivan', 'male', 176, 93, 'Ivanov'];
// console.log(zodiak);
// console.log(man);
// console.log('Длина массива');
// console.log(zodiak.length);
// console.log(man.length);
// console.log(man[4]);
// man[0]= 'Sergey';
// console.log(man);

let a = [1, 2, 3, 4];
console.log(a);

let t = a[0]; // 1
a[0] = a[a.length - 1];
console.log(a);
a[a.length - 1] = t;
console.log(a);
console.log(a[888]);

for (let i = 0; i < a.length; i++){
    document.querySelector('.out-1').innerHTML += a[i] + ' ';
}

let out = '';
for (let i = 0; i < a.length; i++){
    if (a[i] % 2 == 0){
        out += a[i] + '__';
    }
}
document.querySelector('.out-1').innerHTML = out;

let b = [4, 5, 2, 24, 21, 214, 12, 1, 222];
let max = b[0]// 4;
for (i = 0; i < b.length; i++){
    if (b[i] > max){
        max = b[i];
    }
}
console.log(max);

let sum = 0;
for (let i = 0; i < b.length; i++){
    sum = sum + b[i];
}
console.log(sum);