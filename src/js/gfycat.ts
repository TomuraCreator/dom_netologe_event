class Main {
	table!: string;
	constructor() {
		this.table;
		this.create_html_table();
	}

	create_html_table(): void {
		let bodyTable: string = ``;
		this.table = `
		<table>
		<tr id="row1">
			<td></td><td></td><td></td><td></td>
		</tr>
		<tr id="row3">
			<td></td><td></td><td></td><td></td>
		</tr>
		<tr id="row3">
			<td></td><td></td><td></td><td></td>
		</tr>
		<tr id="row4">
			<td></td><td></td><td></td><td></td>
		</tr>
		</table>
		`;

	}

}

export class GamingInGobline extends Main {
	static div: HTMLElement;
	setId: any
	col: number
	int: number
	constructor(int: number) {
		super();
		this.col = 0;
		this.int = int

	}

	create_html_goblin(): string {
		return "<img src='../../pic/goblin.png'>"
	}

	insert_tableInto_page(): void {
		let t!: HTMLElement;
		t = document.getElementById('game') as HTMLElement
		t.innerHTML = this.table
	}

	start_game() {
		let max: undefined | number;
		this.insert_tableInto_page();

		let tbl!: HTMLTableElement
		let row!: HTMLCollectionOf<HTMLTableRowElement>
		let td!: HTMLCollectionOf<HTMLTableCellElement>;

		let row_len: number = 0
		let td_len: number = 0


		tbl = document.getElementsByTagName("table")[0]
		row = tbl.getElementsByTagName('tr')

		// while (col < int) {

		let setId = setInterval(() => {

			row_len = Math.floor(Math.random() * row.length)

			td_len = Math.floor(Math.random() * row[row_len].cells.length)


			if (row[row_len].cells[td_len].innerHTML === '') {
				row[row_len].cells[td_len].innerHTML = this.create_html_goblin()
				this.col += 1
				setTimeout(() => row[row_len].cells[td_len].innerHTML = '', 1000)
			}
			console.log('row_len: ' + String(row_len), td_len)
			this.stopInterval(setId);

		}, 1300)

		return setId
	}

	stopInterval(ind: any) {
		if (this.col === this.int) {

			clearInterval(ind);
		}
	}

}



