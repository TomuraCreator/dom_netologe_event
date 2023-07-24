

class Gobline {
	tds: HTMLCollectionOf<HTMLElement>;
	constructor() {
		this.tds = document.getElementsByClassName('td') as HTMLCollectionOf<HTMLElement>;
	}

	get getRandom() {
		// делаем произвольное число - индекс для ичейки
		return Math.floor(Math.random() * this.tds.length);
	}

	set setAppendGoblin(ind: number) {

		this.tds[ind].classList.add('active');
	}

	set setRemoveGoblin(td: HTMLElement) {
		td.classList.remove('active');
	}

	set setLiveCounter(int: number) {
		//счетчик
		const counter = document.querySelector('.counter .count span:last-of-type') as HTMLElement;
		counter.innerHTML = String(int + 1);

	}
}


const goblinClassActive = new Gobline();
let liveGobline: any;
const startGame = () => {
	liveGobline = setInterval(() => {

		goblinClassActive.setAppendGoblin = goblinClassActive.getRandom as number;
		if (document.getElementsByClassName('active').length > 0) {
			setTimeout(() => {
				goblinClassActive.setRemoveGoblin = document.getElementsByClassName('active')[0] as HTMLTableCellElement;
			}, 700);
		}
	}, 1700);
}


startGame();

let count = 0;
for (let i = 0; i < goblinClassActive.tds.length; i++) {
	goblinClassActive.tds[i].addEventListener('click', (e: Event) => {

		if (e.target === document.querySelector('.active')) {
			goblinClassActive.setLiveCounter = count;
			count++;
			clearInterval(liveGobline);
			startGame()
		}
	});
}
