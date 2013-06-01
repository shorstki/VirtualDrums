import ui.View as View;
import animate;
import ui.View;
import ui.ImageView;
import ui.TextView;

import AudioManager;
import ui.widget.ButtonView as ButtonView;

//import src.instruments.Instrument as 


exports = Class(ui.View, function (supr) {
	this.init = function (opts) {
		opts = merge(opts, {
			x: 0,
			y: 0,
			width: 320,
			height: 480,
			backgroundColor: '#FFFFFF'
		});

		supr(this, 'init', [opts]);
		
		this._sound = new AudioManager({
			path: "reources/sounds/",
			
			files : {
				crash01: {
					volume: 0.9
				},
				crasho2: {
					volume: 0.8
				}
			}
		});
		
		var crash = new ButtonView({
			superview: this,
			width: 256,
			height: 256,
			x: 50,
			y: 140,
			images: {
				down: "resources/images/instruments/crash1.png",
				up: "resources/images/instruments/crash1.png"
			},
			sounds: {
				"down": "resources/sounds/crash01.mp3"
			}
		});
		
		this.build();
	};

	this.build = function () {
		
	};
});
