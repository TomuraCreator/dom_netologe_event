
let max_view_goblin: number = 10;
const { GamingInGobline } = require('./gfycat');
const { LiveCounter } = require('./counters');
let block: any;

block = new GamingInGobline(max_view_goblin); // this's a gfycat file
block.insert_tableInto_page();


let live = new LiveCounter(); // this's a counters file
live.start_work();
let liv_count = live.liveCount();


let gameId = setInterval(() => {
	block.start_game();

	liv_count(removeImgAfterClick); //it's returning the working with the event from the counter file

	if (block.display_goblin > 1 && live.stop_count === 0 && live.click_count > 0) block.display_goblin = 0;
	if (block.display_goblin === 5 || live.stop_count === 5 || live.val === 5) {
		clearInterval(gameId);
		block.int = 0
	}
	live.integer = 0;
}, 1800)
// and plus second timer is into the gfycat file



function removeImgAfterClick(): void {
	const tds = document.getElementsByTagName('td');
	for (let i = 0; i < tds.length; i++) {
		const img = tds[i].getElementsByTagName('img')[0];

		if (img !== null && img !== undefined) img.remove() as any;
	}

}
