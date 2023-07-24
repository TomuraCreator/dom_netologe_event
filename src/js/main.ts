

class Gobline {
	tds: HTMLCollectionOf<HTMLTableCellElement>
	constructor() {
		this.tds = document.getElementsByTagName('td') as HTMLCollectionOf<HTMLTableCellElement>;
	}

	get getRandom() {
		// делаем произвольное число - индекс для ичейки
		return Math.floor(Math.random() * this.tds.length);
	}

	set setAppendGoblin(ind: number) {

		this.tds[ind].classList.add('active');
	}

	set setRemoveGoblin(td: HTMLTableCellElement) {
		td.classList.remove('active');
	}

	set setLiveCounter(int: number) {
		//счетчик
		const counter = document.querySelector('.counter .count span:last-of-type') as HTMLElement;
		counter.innerHTML = String(int + 1);

	}
}


const goblin_class_active = new Gobline();
let live_gibline: any;
const start_game = () => {
	live_gibline = setInterval(() => {

		goblin_class_active.setAppendGoblin = goblin_class_active.getRandom as number;
		if (document.getElementsByClassName('active').length > 0) {
			setTimeout(() => {
				goblin_class_active.setRemoveGoblin = document.getElementsByClassName('active')[0] as HTMLTableCellElement;
			}, 700);
		}
	}, 1700);
}


start_game();

let count = 0;
for (let i = 0; i < goblin_class_active.tds.length; i++) {
	goblin_class_active.tds[i].addEventListener('click', (e: Event) => {

		if (e.target === document.querySelector('.active')) {
			goblin_class_active.setLiveCounter = count;
			count++;
			clearInterval(live_gibline);
			start_game()ж
		}
	});
}
