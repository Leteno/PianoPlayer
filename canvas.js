
console.log('include canvas.js');

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var maxToneDb = 20;
var toneAddFoot = 3;
var musicData = [];
// tune is 12345678
for (i = 0; i < 8; i++) {
    musicData[i] = 0;
}

function canvasOnHit(tone) {
    // tone is 1 2 3 ... 7 8
    var index = tone - 1;
    if (index < 0) {
	index = 0;
    }
    if (index > 7) {
	index = 7;
    }
    if (musicData[index] < maxToneDb - toneAddFoot) {
	musicData[index] += toneAddFoot;
    }
}

function fading() {
    for (i = 0; i < 8; i++) {
	if (musicData[i] > 0) {
	    musicData[i] -= 1;
	}
    }
}

iFading = setInterval(fading, 500);