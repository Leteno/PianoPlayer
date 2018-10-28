
console.log('include audio.js');

function play(tone) {
    var audioElement = document.getElementById(tone);
    audioElement.currentTime = 0;
    audioElement.play();
}