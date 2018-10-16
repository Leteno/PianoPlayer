
console.log('include audio.js');

var playingA = null;
function play(tone) {
    var audioElement = document.getElementById(tone);
    if (playingA != null) {
	playingA.pause();
	playingA.currentTime = 0;
    }
    audioElement.play();
    playingA = audioElement;
}

var doA = document.getElementById("do");
var reA = document.getElementById("re");
var miA = document.getElementById("mi");
var faA = document.getElementById("fa");
var soA = document.getElementById("so");
var laA = document.getElementById("la");
var siA = document.getElementById("si");

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
