/*
 * The main application file, your game code begins here.
 */

//sdk imports
import device;
import ui.StackView as StackView;
//user imports
import src.TitleScreen as TitleScreen;
import src.GameScreen as GameScreen;
import src.soundcontroller as soundcontroller;

/* Your application inherits from GC.Application, which is
 * exported and instantiated when the game is run.
 */
exports = Class(GC.Application, function () {

	/* Run after the engine is created and the scene graph is in
	 * place, but before the resources have been loaded.
	 */
	this.initUI = function () {
		var titlescreen = new TitleScreen(),
				gamescreen = new GameScreen();

		this.view.style.backgroundColor = '#FFFFFF';

		//Add a new StackView to the root of the scene graph
		var rootView = new StackView({
			superview: this,
			x: 0,
			y: 0,
			width: 320,
			height: 480
		});

		rootView.push(titlescreen);

		var sound = soundcontroller.getSound();


		titlescreen.on('titlescreen:start', function () {
			rootView.push(gamescreen);
			gamescreen.emit('app:start');
		});


		gamescreen.on('gamescreen:end', function () {
			rootView.pop();
		});
	};


	this.launchUI = function () {};
});
