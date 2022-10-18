document.querySelector('.i-1').onkeypress = event => {
    console.log('keypress');
    console.log('charCode: ' + event.charCode);
    console.log('code: '+ event.code);
    console.log('key: ' + event.key);
    console.log('keyCode: '+ event.keyCode);
    console.log('which: '+ event.which);
}

document.querySelector('.i-1').onkeydown = event => {
    console.log('keydown');
    console.log('charCode: ' + event.charCode);
    console.log('code: '+ event.code);
    console.log('key: ' + event.key);
    console.log('keyCode: '+ event.keyCode);
    console.log('which: '+ event.which);
    if (event.key == 'CapsLock') {
        document.querySelector('.ch-1').checked = true;
    } else {w
        document.querySelector('.ch-1').checked = false;
    }
}

document.querySelector('.i-1').onkeyup = event => {
    console.log('keyup');
    console.log('charCode: ' + event.charCode);
    console.log('code: '+ event.code);
    console.log('key: ' + event.key);
    console.log('keyCode: '+ event.keyCode);
    console.log('which: '+ event.which);
}
document.querySelector('.i-2').onkeypress = event => {
    console.log('keyup');
    console.log('charCode: ' + event.charCode);
    console.log('code: '+ event.code);
    console.log('key: ' + event.key);
    console.log('keyCode: '+ event.keyCode);
    console.log('which: '+ event.which);
    const a = {
        q: 'w',
        w: 'e'
    }
    document.querySelector('.i-2').value += a[event.key];
    return false;
}