
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

var doA = document.getElementById("do");
var reA = document.getElementById("re");
var miA = document.getElementById("mi");
var faA = document.getElementById("fa");
var soA = document.getElementById("so");
var laA = document.getElementById("la");
var siA = document.getElementById("si");

var playingA = null;

function playDo() {
    console.log('do');
    if (playingA != null) {
	playingA.pause();
	playingA.currentTime = 0;
    }
    doA.play();
    playingA = doA;
}

function playRe() {
    console.log('re');
    if (playingA != null) {
	playingA.pause();
	playingA.currentTime = 0;
    }
    reA.play();
    playingA = reA;
}

function playMi() {
    console.log('mi');
    if (playingA != null) {
	playingA.pause();
	playingA.currentTime = 0;
    }
    miA.play();
    playingA = miA;
}

function playFa() {
    console.log('fa');
    if (playingA != null) {
	playingA.pause();
	playingA.currentTime = 0;
    }
    faA.play();
    playingA = faA;
}

function playSo() {
    console.log('so');
    if (playingA != null) {
	playingA.pause();
	playingA.currentTime = 0;
    }
    soA.play();
    playingA = soA;
}

function playLa() {
    console.log('la');
    if (playingA != null) {
	playingA.pause();
	playingA.currentTime = 0;
    }
    laA.play();
    playingA = laA;
}

function playSi() {
    console.log('si');
    if (playingA != null) {
	playingA.pause();
	playingA.currentTime = 0;
    }
    siA.play();
    playingA = siA;
}

function playDoh() {
    console.log('doh');
//    var audio = document.getElementById('doh');
//    audio.play();
}
