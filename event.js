
console.log('include event.js');

function install() {
    var canvas = document.getElementById('canvas');
    canvas.addEventListener('click', clickHandler, false);

    window.addEventListener('keydown', keyDownHandler, false);
}

function clickHandler(e) {
    console.log('click at ' + e);
}

function keyDownHandler(e) {
    var key = e.keyCode ? e.keyCode :e.which;
    console.log('press at ' + key);
    switch(key) {
    case 65:
	playDo(); canvasOnHit(1); break;
    case 83:
	playRe(); canvasOnHit(2); break;
    case 68:
	playMi(); canvasOnHit(3); break;
    case 70:
	playFa(); canvasOnHit(4); break;
    case 74:
	playSo(); canvasOnHit(5); break;
    case 75:
	playLa(); canvasOnHit(6); break;
    case 76:
	playSi(); canvasOnHit(7); break;
    case 186:
	playDoh(); canvasOnHit(8); break;
    }
}

install()