let a = 1;

function rec(){
    a++;
    console.log(a);
    if (a > 10) return a;
    rec() ;
}

rec();

let offset = 0;
function move (){
    offset = offset + 5;
    document.querySelector('.test-2').style.left = offset + 'px';
    if(offset > 300){
        return true;
    }
    setTimeout(move, 500);
}

document.querySelector('.move').onclick = move;