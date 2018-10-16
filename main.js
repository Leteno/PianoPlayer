
console.log('include event.js');

var canvasOnHit = function(){};
function main() {
    var c = canvas();
    var canvasOnHit = c.canvasOnHit;
    window.addEventListener('keydown', keyDownHandler, false);
}

function keyDownHandler(e) {
    var key = e.keyCode ? e.keyCode :e.which;
    console.log('press at ' + key)
    switch(key) {
    case 90:
	play('doL'); canvasOnHit(1); break;
    case 88:
	play('reL'); canvasOnHit(2); break;
    case 67:
	play('miL'); canvasOnHit(3); break;
    case 86:
	play('faL'); canvasOnHit(4); break;
    case 77:
	play('soL'); canvasOnHit(5); break;
    case 188:
	play('laL'); canvasOnHit(6); break;
    case 190:
	play('siL'); canvasOnHit(7); break;
    case 65:
	play('do'); canvasOnHit(1); break;
    case 83:
	play('re'); canvasOnHit(2); break;
    case 68:
	play('mi'); canvasOnHit(3); break;
    case 70:
	play('fa'); canvasOnHit(4); break;
    case 74:
	play('so'); canvasOnHit(5); break;
    case 75:
	play('la'); canvasOnHit(6); break;
    case 76:
	play('si'); canvasOnHit(7); break;
    case 81:
	play('doH'); canvasOnHit(8); break;
    case 87:
	play('reH'); canvasOnHit(2); break;
    case 69:
	play('miH'); canvasOnHit(3); break;
    case 82:
	play('faH'); canvasOnHit(4); break;
    case 85:
	play('soH'); canvasOnHit(5); break;
    case 73:
	play('laH'); canvasOnHit(6); break;
    case 79:
	play('siH'); canvasOnHit(7); break;
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