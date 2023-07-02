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
	div: any;
	click_count: number;

	constructor() {
		super()
		this.trueFalse = false
		this.stop_count = 0;
		this.click_count = 0;
	}

	listenerItemImg(e: any): number {
		if (e.target.tagName === 'IMG') return 1
		return 0
	}

	liveCount() {
		let html_: string;
		this.div = document.querySelector('#game') as HTMLDivElement;
		let click = 0; // this's a protaction for the souble-click

		let integ: number = 0;

		return () => {
			click = 0
			this.div.addEventListener('click', (e: any) => {
				this.click_count += 1;
				e.currentTarget;

				if (click === 0) {
					click = this.click_count;
					integ = this.listenerItemImg(e);
					e.currentTarget;

					if (integ === 0) {
						this.stop_count += 1
					} else if (integ === 1) {
						this.stop_count = 0;
						this.val += 1;
						html_ = `<div><span>Балы: </span>${this.val}</div>`;
						this.upDataHthlCounter(html_);
					};

					integ = 0;
				};
		})
		}
	}
}
