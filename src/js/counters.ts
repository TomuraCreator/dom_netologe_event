import { type } from "os";
import { stringify } from "querystring";

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
	div: any
	upDataHthlCounter_proport: any
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

	liveCount() {

		let html_: string;
		this.div = document.querySelector('#game') as HTMLDivElement;
		// this.div = (() => { return this.div })().bind(this)

		//
		let upDataHthlCounter_proport: any = this.upDataHthlCounter.bind(this)
		// return (function () {
		let div_: any = upDataHthlCounter_proport.div;
		div_.addEventListener('mousedown', (e: any) => {
			let integ: number = upDataHthlCounter_proport.listenerItemImg(e);

			(integ === 0) ? upDataHthlCounter_proport.stop_count += 1 : upDataHthlCounter_proport.stop_count = 0;
			if (upDataHthlCounter_proport.stop_count === 5) upDataHthlCounter_proport.trueFalse = true;

			upDataHthlCounter_proport.val += integ;
			html_ = `<div><span>Балы: </span>${upDataHthlCounter_proport.val}</div>`;
			upDataHthlCounter_proport(html_)
		})
		// })()


	}



}
