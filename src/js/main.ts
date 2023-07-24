class Controller {
	private interval: NodeJS.Interval;
	private lastIndex: number;
	
	constructor(readonly cells: NodeList<HTMLElement>, private score: ScoreBlock) {
		this.initListener();
	}

	get getRandom() {
		// делаем произвольное число - индекс для ичейки
		return Math.floor(Math.random() * this.tds.length);
	}

	setGoblinByIndex(index: number) {
		this.cells[index].classList.add('active');
	}

	removeGoblinByIndex(index: number) {
		this.cells[index].classList.remove('active');
	}

	start() {
		this.lastIndex = this.getRandom;
		this.interval = setInterval(() => {
			this.removeGoblinByIndex(lastIndex);
			lastIndex = this.getRandom;
			this.setGoblinByIndex(lastIndex)
		}, 1000);
	}

	initListener() {
		this.cells.parentElement.addEventListener('click', (e: MouseEvent) => {
			const target = <HTMLElement>e.target;
			
			if(target.classList.contains('active')) {
				this.score.hit()
				this.setGoblinByIndex(this.lastIndex)
				clearInterval(this.interval)
				this.start();
				return;
			}
			this.score.miss();
		})
	}
}

class ScoreBlock {
	constructor(private shoot: HTMLElement, private missed: HTMLElement) {}

	hit() {
		this.shoot.textContent = parseInt(this.shoot.textContent) + 1
	}

	miss() {
		this.missed.textContent = parseInt(this.shoot.textContent) + 1
	}
}

const score = new ScoreBlock()
const controller = new Controller(
	document.querySelectorAll('.td'),
	new ScoreBlock(document.querySelector('.count span:last-of-type'))
);

controller.start()


