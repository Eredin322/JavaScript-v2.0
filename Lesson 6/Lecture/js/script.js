let out = document.querySelector('.out');

// for (let i = 0; i < 5; i++){
//   for (let k = 0; k < 10; k++){
//     out.innerHTML += k;
//   }
//   out.innerHTML += '<br>';
// }

for (let i = 1; i < 10; i++){

  for (let k = 1; k < 10; k++){
    out.innerHTML += `${i}*${k}=${i * k}<br>`;
  }
  out.innerHTML += '<hr>';
}