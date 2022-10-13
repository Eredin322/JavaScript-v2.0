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






let stroka = "1234545"; // основная строка
function f() {
    let myset = new Set(stroka); // set = 12345
    let bukvi = {} // ассоциативный массив = объект счетчик

    for (let item of myset ) { /* перебираем set */
        let counter = 0; /* счетчик символов */

        for (let i = 0; i < stroka.length; i++) { /* каждый раз пребираем всю строку */
            if ( stroka[ i ] === item) {
                counter++; // крутим счет если есть такой символ
            };
        }

        bukvi [ item ] = counter; /* добвляем результат [ символ ] = кол-во */
    }

    alert(bukvi[item]); // символы и их количество
    }

    document.querySelector('.b').onclick = () => {
        console.log(f());
}
