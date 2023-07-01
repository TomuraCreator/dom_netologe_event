class Counter {
	counter!: string;
	val: number;
	constructor() {
		this.counter = '';
		this.val = 0;
		this.start_work()
	}

	createHtmlCounter(): string {
		return `<div class="counter">
			<div><b>Количество балов</b></div>
			<div><span>Балы: </span>${this.val}</div>
		</div>`
	}

	insertHtmlCounter(): void {
		let t!: HTMLDivElement
		t = document.querySelector('#game') as HTMLDivElement
		t.insertAdjacentHTML('beforebegin', this.createHtmlCounter());
	}

	start_work() {
		this.insertHtmlCounter()
	}

}


export class LiveCounter extends Counter {
	constructor() {
		super()


	}

	liveCount() {

	}
}
