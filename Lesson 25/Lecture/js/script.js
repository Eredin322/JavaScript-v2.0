const xhttp = new XMLHttpRequest();
let a = 0;
xhttp.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200){
        myFunction(this.responseText);
    }
}

xhttp.open('GET','https://getpost.itgid.info/index2.php', true);
xhttp.send()

function myFunction(data){
    a = data 
    console.log(data); 
}

console.log(a);

const xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200){
        myFunction2(this.responseText);
    }
}

xhttp2.open('POST','https://getpost.itgid.info/index2.php', true);
xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp2.send()

function myFunction2(){
    a = data 
    console.log(data); 
}