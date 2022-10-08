const a = [1,2,3,4,5,6,7,8,9];
const b = ['a','b','c','d','e','f'];

console.log(a.length);
console.log(a.push(10,11,44,55,66));
console.log(a);

b.push('j','e');

console.log(b.pop());

// Удалить элемент внутри массива
delete a[3];
console.log(a);
a.splice(3,3,44,55,66);
console.log(a);
a.shift( )