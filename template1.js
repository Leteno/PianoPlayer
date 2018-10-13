
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var Color = {
blue: 'rgb(0,0,255)'
};

var templateConfig = {
rWidth: 30,
rHeightMultiple: 10,
wGap: 10
};

var templatePosition = {
startX: 10,
startY: canvas.height - 10
};

function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = Color.blue;

    var x = templatePosition.startX;
    var y = templatePosition.startY;
    var rWidth = templateConfig.rWidth;
    var rHeightM = templateConfig.rHeightMultiple;
    var wGap = templateConfig.wGap;

    var _md = getMusicData();
    for (i = 0; i < _md.length; i++) {
	var rHeight = (_md[i] + 1) * rHeightM;
	ctx.fillRect(x, y - rHeight, rWidth, rHeight);
	x += rWidth + wGap;
    }

    ctx.closePath();
    ctx.fill();

    window.requestAnimationFrame(drawCanvas);
}

// Add music buffer to smooth the increment and decrement.
var musicBuffer = [];
var templateTime = new Date().getTime();
function getMusicData() {
    var _md = musicData;
    if (musicBuffer.length < _md.length) {
	for (i = 0; i < _md.length; i++) {
	    musicBuffer[i] = _md[i];
	}
    } else {
	var delta = 1;
	var thresholdTime = 50;
	var deltaTime = new Date().getTime() - templateTime;
	if (deltaTime > thresholdTime) {
	    templateTime = new Date().getTime();  // lazy, but beauty
	    for (i = 0; i < _md.length; i++) {
		var gap = _md[i] - musicBuffer[i];
		if (gap != 0) {
		    musicBuffer[i] += (gap > 0 ? 1 : -1) * delta;
		}
	    }
	}
    }
    return musicBuffer;
}



// kick
window.requestAnimationFrame(drawCanvas);
