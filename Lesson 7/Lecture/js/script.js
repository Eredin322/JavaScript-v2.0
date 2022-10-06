let f1 = document.querySelector('.f-1');

function one() {
  console.log('work');
}

// one();

f1.onclick = function (){
  console.log('hello');
}

console.log(1 + one());
console.log(one());

function two (){
  console.log('work 22222');
  return 54;
}

two();

console.log(1 + two());

let a = 8;
let b = 9;

function multiply(){
  console.log(a*b);
  return a*b;
}

let c1 = multiply();
let c2 = 10* multiply()
console.log(c1, c2);

function multi2 (x, y){
  return x * y;
}

console.log(multi2(4,5));
console.log(multi2(20,5));
console.log(multi2(20,a));