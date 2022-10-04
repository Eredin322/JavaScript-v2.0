// document.querySelector('button').onclick = myFunc;

// function myFunc() {
//   console.info(document.querySelector('#one').value);
//   // style
//   document.querySelector('button').style.backgroundColor = document.querySelector('#one').value;
// }

// document.querySelector('#one').oninput = () => {
//   console.log(document.querySelector('#one').value);
//   document.querySelector('span').innerHTML = document.querySelector('#one').value;
// }

document.querySelector('#btn-1').onclick = () => {
  console.log(document.querySelector('#i2').value);
  let myCheckBox = document.querySelector('#i2');
  console.log(myCheckBox.checked);
  if ( myCheckBox.checked) {
    console.log("Сработало");
  } else {
    console.log("Не сработало");
  }
}

document.querySelector('#btn-2').onclick = (event) => {
  event.preventDefault();
  // let text = document.querySelector('#two');
  // console.log(text.value);
  // text.value = 'one';
  let form = document.querySelector('form');
  console.log(form);
  console.log(form.elements.two.value);
  console.log(form.elements.n2.value);
}