
console.log('include template2.js');

var TEMPLATE2 = {}

TEMPLATE2.T = function() {

    var requestId = null;
    var movingInterval = null;
    var dc = TEMPLATE2.DataController();
    var cc = TEMPLATE2.CanvasController(dc);

    this.toneHit = function(tone) {
	dc.onHitAtTone(tone);
    };
    this.enable = function() {
	requestId = window.requestAnimationFrame(cc.draw);
	movingInterval = setInterval(dc.blockMoving);
    };
    this.close = function() {
	window.cancelAnimationFrame(requestId);
	clearInterval(movingInterval);
    };
    return this;
};

TEMPLATE2.DataController = function() {

    var config = function() {
	this.blockWidth = 10;
	this.movingPeriod = 10; // ms
	return this;
    }();
    var canvas = document.getElementById('canvas');
    var data = [];
    for (i = 0, len = canvas.width + config.blockWidth; i < len; i++) {
	data[i] = 0;
    }

    this.onHitAtTone = function(tone) {
	for (i = canvas.width; i < data.length; i++) {
	    data[i] = tone;
	}
    };

    this.blockMoving = function() {
	var lastTime = new Date().getTime();
	return function() {
	    var current = new Date().getTime();
	    if (current - lastTime > config.movingPeriod) {
		lastTime = current;
		var lastIndex = data.length - 1;
		for (i = 0; i < lastIndex; i++) {
		    data[i] = data[i+1];
		}
		data[lastIndex] = 0;
	    }
	};
    }();

    this.getHeightArray = function() {
	var copyOne = [];
	return function() {
	    for (i = 0; i < data.length; i++) {
		copyOne[i] = data[i];
	    }
	    return copyOne;
	};
    }();
    return this;
};

TEMPLATE2.CanvasController = function(dc) {
    var that = this;
    var dataController = dc;
    var canvas = document.getElementById('canvas');
    var config = function() {
	this.blockHeightMultiple = 10;
	this.color = 'rgb(0, 0, 200)';
	this.startX = 10;
	this.startY = canvas.height - 10;
	return this;
    }();

    this.draw = function() {

	console.log('template2 draw is working');

	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = config.color;

	var _data = dataController.getHeightArray();
	var x = config.startX;
	var y = config.startY;
	for (i = 0; i < _data.length; i++) {
	    var rHeight = _data[i] * config.blockHeightMultiple;
	    ctx.fillRect(x + i, y - rHeight, 1, rHeight);
	}
	ctx.closePath();
	ctx.fill();

	requestId = window.requestAnimationFrame(that.draw);
    };
    return this;
};