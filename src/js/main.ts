// function stopGame() {
// 	clearInterval(game);
// }

const { GamingInGobline } = require('./gfycat');
const { LiveCounter } = require('./counters');
let block: any;
block = new GamingInGobline(8);
block.start_game()


let live = new LiveCounter();
live.start_work()
live.liveCount()


// let game = setInterval(() => {
// 	live.liveCount()
// 	if (live.trueFalse === true) {
// 		block.int = 0;
// 		stopGame(game);
// 	}
// }, 100)




