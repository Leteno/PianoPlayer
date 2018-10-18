
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