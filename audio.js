
console.log('include audio.js');

function play(val) {
    var n = Number(val);
    switch(n) {
    case 1:
	playDo(); break;
    case 2:
	playRe(); break;
    case 3:
	playMi(); break;
    case 4:
	playFa(); break;
    case 5:
	playSo(); break;
    case 6:
	playLa(); break;
    case 7:
	playSi(); break;
    case 8:
    default:
	playDoh(); break;
    }
}

function playDo() {
    console.log('do');
    var audio = document.getElementById('do');
    audio.play();
}

function playRe() {
    console.log('re');
    var audio = document.getElementById('re');
    audio.play();
}

function playMi() {
    console.log('mi');
    var audio = document.getElementById('mi');
    audio.play();
}

function playFa() {
    console.log('fa');
    var audio = document.getElementById('fa');
    audio.play();
}

function playSo() {
    console.log('so');
    var audio = document.getElementById('so');
    audio.play();
}

function playLa() {
    console.log('la');
    var audio = document.getElementById('la');
    audio.play();
}

function playSi() {
    console.log('si');
    var audio = document.getElementById('si');
    audio.play();
}

function playDoh() {
    console.log('doh');
//    var audio = document.getElementById('doh');
//    audio.play();
}
