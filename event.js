
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
	playDo(); break;
    case 83:
	playRe(); break;
    case 68:
	playMi(); break;
    case 70:
	playFa(); break;
    case 74:
	playSo(); break;
    case 75:
	playLa(); break;
    case 76:
	playSi(); break;
    case 186:
	playDoh(); break;
    }
}

install()