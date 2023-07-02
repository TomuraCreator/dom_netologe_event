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
live.start_work();
let liv_count = live.liveCount();

let gameId = setInterval(() => {
	console.log('You are loser! # 2');
	block.start_game();
	liv_count;

	// console.log('upDataHthlCounter_proport.stop_count: ',)
	console.log('----block.display_goblin-->> ', block.display_goblin)
	if (block.display_goblin > 1 && live.stop_count === 0) block.display_goblin = 0;
	console.log('stop_count: ', live.stop_count)
	console.log('live.val: ', live.val)
	if (block.display_goblin === 5 || live.stop_count === 5 || live.val === 5) {
		clearInterval(gameId);
	}
}, 1700)
// block.stopInterval(gameId);
// clearInterval(gameId);

// document.addEventListener('', (e) => {
// 	console.log('e.type: ', e.type)

// 	if (e.type === 'mousedown') {

// 	}

// })





