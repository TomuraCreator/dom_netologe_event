function stopGame() {
	clearInterval(game);
}

const { GamingInGobline } = require('./gfycat');
const { LiveCounter } = require('./counters');
let block: any;
block = new GamingInGobline(8);
block.start_game()


let live = new LiveCounter();
live.start_work()



document.addEventListener('', (e) => {
	if (e.type === 'mousedown') {

	}

	// 	live.liveCount(e);
})
let game = setInterval(() => {
	console.log('4444: ' + String(document.onclick));

	if (live.trueFalse === true) {

		block.int = 0;
		stopGame();
	}
}, 500)




