function myAlert(a, b, d){
    let c = `<p class="${b}">${a}</p>`;
    document.querySelector(d).innerHTML = c;
}

myAlert('Hi', 'red', '.test');
myAlert('Hi', 'orange', '.test2');


let m = new Alert('My message', 'red', '.test');
console.log(m);
m.showAlert();

let m2 = new Alert2('My message', 'red', '.test', 'account_balance');
m2.showIconAlert();
// m2.myAlert();