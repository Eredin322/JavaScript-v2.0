let a = new Set();
a.add(1);
a.add(2);
a.add('Hello'); 
a.add(1); 
// a.clear(); 
console.log(a);
console.log(a[0]); // DOES NOT WORK
console.log(a.length); // DOES NOT WORK
console.log(a.size); // WORK LIKE LENGTH
console.log(a.has(2)); // TRUE
console.log(a.has('2')); // FALSE

// for (let i in a){
//     console.log(i);
// }

for (let i of a){
    console.log(i); 
}

let arr = [1,2,3,1,3,4,5,'hello', 5,1,3,2];

let b = new Set(arr);
console.log(b);

let bArr = Array.from(b);
console.log(bArr);