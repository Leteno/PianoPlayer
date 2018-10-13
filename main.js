
console.log('include event.js');

var canvasOnHit = function(){};
function main() {
    var c = canvas();
    var canvasOnHit = c.canvasOnHit;
    window.addEventListener('keydown', keyDownHandler, false);
}

function keyDownHandler(e) {
    var key = e.keyCode ? e.keyCode :e.which;
    switch(key) {
    case 65:
	playDo(); canvasOnHit(1); break;
    case 83:
	playRe(); canvasOnHit(2); break;
    case 68:
	playMi(); canvasOnHit(3); break;
    case 70:
	playFa(); canvasOnHit(4); break;
    case 74:
	playSo(); canvasOnHit(5); break;
    case 75:
	playLa(); canvasOnHit(6); break;
    case 76:
	playSi(); canvasOnHit(7); break;
    case 186:
	playDoh(); canvasOnHit(8); break;
    }
}

var canvas = function() {

    this.canvasOnHit = function (tone) {
	// tone is 1 2 3 ... 7 8
	selectedTemplate.onToneHit(tone);
    };

    var dict = {};
    var t1 = template1();
    dict['jumpingVol'] = new Template(t1.toneHit, t1.enable, t1.close);
    var t2 = template2();
    dict['scrollingVol'] = new Template(t2.toneHit, t2.enable, t2.close);
    dict['other'] = new Template(function(){}, function(){}, function(){});

    var _s = document.getElementById('select');
    var selectedTemplate = dict[_s.options[_s.selectedIndex].value];
    selectedTemplate.enable();
    _s.onchange = function() {
	selectedTemplate.close();
	selectedTemplate = dict[_s.options[_s.selectedIndex].value];
	selectedTemplate.enable();
    };

    function Template(onToneHit, enable, close) {
	this.onToneHit = onToneHit;
	this.enable = enable;
	this.close = close;
    }

    return this;
};

main();