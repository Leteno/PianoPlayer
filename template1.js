
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var Color = {
blue: 'rgb(0,0,255)'
};

function getMusicData() {
    return musicData;
}

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

var templateConfig = {
rWidth: 30,
rHeightMultiple: 10,
wGap: 10
};

var templatePosition = {
startX: 10,
startY: canvas.height - 10
};

// kick
window.requestAnimationFrame(drawCanvas);
