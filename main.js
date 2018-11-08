
console.log('include event.js');

var MAIN = function(){
    this.selectedTemplate = null;
};

MAIN.prototype.run = function () {
    this.init();
    var that = this;
    window.addEventListener('keydown', function(e) {that.handleKeyDown(e)}, false);
};

MAIN.prototype.handleKeyDown = function (e) {
    var key = e.keyCode ? e.keyCode :e.which;
    var datas = [
        {'key': 90, 'music': 'doL', 'tone': 1 },
        {'key': 88, 'music': 'reL', 'tone': 2 },
        {'key': 67, 'music': 'miL', 'tone': 3 },
        {'key': 86, 'music': 'faL', 'tone': 4 },
        {'key': 77, 'music': 'soL', 'tone': 5 },
        {'key': 188,'music': 'laL', 'tone': 6 },
        {'key': 190,'music': 'siL', 'tone': 7 },
        {'key': 65, 'music': 'do', 'tone': 1 },
        {'key': 83, 'music': 're', 'tone': 2 },
        {'key': 68, 'music': 'mi', 'tone': 3 },
        {'key': 70, 'music': 'fa', 'tone': 4 },
        {'key': 74, 'music': 'so', 'tone': 5 },
        {'key': 75, 'music': 'la', 'tone': 6 },
        {'key': 76, 'music': 'si', 'tone': 7 },
        {'key': 81, 'music': 'doH', 'tone': 8 },
        {'key': 87, 'music': 'reH', 'tone': 2 },
        {'key': 69, 'music': 'miH', 'tone': 3 },
        {'key': 82, 'music': 'faH', 'tone': 4 },
        {'key': 85, 'music': 'soH', 'tone': 5 },
        {'key': 73, 'music': 'laH', 'tone': 6 },
        {'key': 79, 'music': 'siH', 'tone': 7 }
    ];
    var i;
    for (i = 0; i < datas.length; i++) {
        d = datas[i];
        if (d['key'] === key) {
	    play(d['music']);
	    this.notifyCanvas(d['tone']);
	    break;
        }
    }
};

MAIN.prototype.init = function() {

    function template (onToneHit, enable, close) {
	return {
	    "onToneHit": onToneHit,
	    "enable": enable,
	    "close": close
	}
    }

    var dict = {};
    var t1 = new TEMPLATE1.T();
    dict['jumpingVol'] = template(t1.toneHit, t1.enable, t1.close);
    var t2 = new template2();
    dict['scrollingVol'] = template(t2.toneHit, t2.enable, t2.close);
    dict['other'] = template(function(){}, function(){}, function(){});

    var _s = document.getElementById('select');
    var selectedValue = _s.options[_s.selectedIndex].value

    var that = this;
    that.selectedTemplate = dict[selectedValue];
    that.selectedTemplate.enable();
    _s.onchange = function() {
	that.selectedTemplate.close();
	var selectedValue = _s.options[_s.selectedIndex].value;
	that.selectedTemplate = dict[selectedValue];
	that.selectedTemplate.enable();
    };
};

MAIN.prototype.notifyCanvas = function(tone) {
    if (this.selectedTemplate != null) {
	this.selectedTemplate.onToneHit(tone);
    }
};

var m = new MAIN();
m.run();