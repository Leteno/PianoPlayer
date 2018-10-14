
console.log('include template1.js')

var template1 = function() {
    var dc = dataController1();
    var cc = canvasController1(dc);

    var requestId = null;
    var iFading = null;

    this.toneHit = function(tone) {
	dc.template1OnHitAtTone(tone);
    };
    this.enable = function() {
	requestId = window.requestAnimationFrame(cc.drawCanvas);
	iFading = setInterval(dc.fading, 500);
    };
    this.close = function() {
	window.cancelAnimationFrame(requestId);
	clearInterval(iFading);
    };
    return this;
};

var dataController1 = function() {
    var musicData = [];
    var lastNoiseTimes = [];
    for (i = 0; i < 8; i++) {
	musicData[i] = 0;
    }
    for (i = 0; i < musicData.length; i++) {
        lastNoiseTimes[i] = new Date().getTime();
    }

    this.template1OnHitAtTone = function(tone) {
	var index = tone - 1;
        if (index < 0) {
	    index = 0;
        }
        if (index > 7) {
	    index = 7;
        }
        var maxToneDb = 20;
        var toneIncrement = 3;
        musicData[index] += toneIncrement;
        if (musicData[index] > maxToneDb) {
	    musicData[index] = maxToneDb;
        }
        lastNoiseTimes[index] = new Date().getTime();
    }

    this.fading = function() {
        var noiseReduceMultiple = 0.03;
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
	}
    }

    // Add music buffer to smooth the increment and decrement.
    var musicBuffer = [];
    var templateTime = new Date().getTime();
    this.getMusicData = function() {
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
    return this;
};

var canvasController1 = function(dc) {

    var _dataController = dc;
    var canvas = document.getElementById('canvas');

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

    this.drawCanvas = function() {

        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = Color.blue;

        var x = templatePosition.startX;
        var y = templatePosition.startY;
        var rWidth = templateConfig.rWidth;
        var rHeightM = templateConfig.rHeightMultiple;
        var wGap = templateConfig.wGap;

        var _md = _dataController.getMusicData();
        for (i = 0; i < _md.length; i++) {
	    var rHeight = (_md[i] + 1) * rHeightM;
	    ctx.fillRect(x, y - rHeight, rWidth, rHeight);
	    x += rWidth + wGap;
        }

        ctx.closePath();
        ctx.fill();

        requestId = window.requestAnimationFrame(drawCanvas);
    }
    return this;
};