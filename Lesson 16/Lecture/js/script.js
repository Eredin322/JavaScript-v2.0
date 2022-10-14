let arr = [4,7,9];
let allP = document.getElementsByTagName('p');
let qP = document.querySelectorAll('p');
console.log(arr);
console.log(allP);
console.log(qP);
// for (let i = 0; i < allP.length; i++){
//     console.log(allP[i]);
// }

// for (let key in qP){
//     console.log(qP[key]);
// }

for (const key of qP){
    console.log(key);
}