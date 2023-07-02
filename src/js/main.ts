// function stopGame(var:any) {
// 	clearInterval(var);
// }


let max_view_goblin: number = 10;
const { GamingInGobline } = require('./gfycat');
const { LiveCounter } = require('./counters');
let block: any;
block = new GamingInGobline(max_view_goblin);
block.insert_tableInto_page();


let live = new LiveCounter();
live.start_work()

console.log('You are loser! # 1');

let gameId = setInterval(() => {
	console.log('You are loser! # 2');
	block.start_game();

	live.liveCount()
	// console.log('upDataHthlCounter_proport.stop_count: ',)
	// console.log('------->> ', block.col, ' && ', block.int)
	if (block.col === max_view_goblin) {
		clearInterval(gameId);
	}
}, 700)
// block.stopInterval(gameId);
clearInterval(gameId);

// document.addEventListener('', (e) => {
// 	console.log('e.type: ', e.type)

// 	if (e.type === 'mousedown') {

// 	}

// })





