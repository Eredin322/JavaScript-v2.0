document.querySelector('.block-1').addEventListener('touchstart', myTouch);
// document.querySelector('.block-1').addEventListener('touchend', myTouchEnd);
document.querySelector('.block-2').addEventListener('touchmove', myTouchMove);

function myTouch(event){
    console.log(event);
    console.log('touch');
    document.querySelector('.out-1').innerHTML += 'work';
    document.querySelector('.out-2').innerHTML = event.changedTouches.length;
}

// function myTouchEnd(event){
//     console.log(event);
//     document.querySelector('.out-3').innerHTML += 'end';
// }

function myTouchMove(event){
    console.log(event);
    event.preventDefault();
    // document.querySelector('.out-3').innerHTML = event.changedTouches.length;
    document.querySelector('.out-3').innerHTML += 'move' + ' ';
}