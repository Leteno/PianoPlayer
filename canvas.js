
console.log('include canvas.js');

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
    lastNoiseTimes[index] = new Date().getTime();
}

var lastNoiseTimes = [];
for (i = 0; i < musicData.length; i++) {
    lastNoiseTimes[i] = new Date().getTime();
}

var noiseReduceMultiple = 0.03;
function fading() {
    for (i = 0; i < 8; i++) {
	if (musicData[i] > 2) {
	    var current = new Date().getTime();
	    var gap = current - lastNoiseTimes[i];
	    var change = Math.floor(gap * noiseReduceMultiple);
	    if (change >= musicData[i]) {
		change = musicData[i] - 1;
	    }

	    musicData[i] -= change;
	} else if (musicData[i] > 0) {
	    musicData[i] -= 1;
	}
	console.log("{0}: {1}", i, musicData[i]);
    }
}

iFading = setInterval(fading, 500);