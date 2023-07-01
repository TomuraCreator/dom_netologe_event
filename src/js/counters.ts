
class Counter {
	counter!: string;
	val: number;
	constructor() {
		this.counter = '';
		this.val = 0;
	}

	createHtmlCounter(): string {
		return `<div class="counter">
			<div><b>Количество балов</b></div>
			<div><span>Балы: </span>${this.val}</div>
		</div>`
	}

	divElement(selector: string) {

		return document.querySelector(selector) as HTMLDivElement
	}
	insertHtmlCounter(): void {
		let t!: HTMLDivElement
		t = this.divElement('#game')
		t.insertAdjacentHTML('beforebegin', this.createHtmlCounter());
	}

	upDataHthlCounter(data_: string): void {
		let t: HTMLDivElement
		t = this.divElement('.counter')
		t.getElementsByTagName('div')[1].innerHTML = data_
	}

	start_work() {
		this.insertHtmlCounter()
	}

}


export class LiveCounter extends Counter {
	trueFalse: boolean;
	stop_count: number;
	constructor() {
		super()
		this.trueFalse = false
		this.stop_count = 0;
	}

	listenerItemImg(e: any): number {
		if (e.target.tagName === 'IMG') {
			e.currentTarget
			return 1
		}
		e.stopImmediatePropagation()
		return 0
	}

	liveCount(): void {
		let t: HTMLDivElement;
		let html_: string;
		// let stop_count: number = 0;

		t = document.querySelector('#game') as HTMLDivElement;
		// console.log(t.addEventListener('mousedown'))
		t.addEventListener('mousedown', e => {
			let integ: number = this.listenerItemImg(e);

			(integ === 0) ? this.stop_count += 1 : this.stop_count = 0;
			if (this.stop_count === 5) this.trueFalse = true;

			this.val += integ;
			html_ = `<div><span>Балы: </span>${this.val}</div>`;
			this.upDataHthlCounter(html_)
		})


	}

}
