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
	display_goblin: number
	int: number
	constructor(int: number) {
		super();
		this.display_goblin = 0;
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
		let tbl!: HTMLTableElement;
		let row!: HTMLCollectionOf<HTMLTableRowElement>;

		let row_ind: number = 0
		let td_ind: number = 0
		tbl = document.getElementsByTagName("table")[0]
		row = tbl.getElementsByTagName('tr')

		// Geting indexes
		row_ind = Math.floor(Math.random() * row.length)
		td_ind = Math.floor(Math.random() * row[row_ind].cells.length)

		// goblin is reappearance and it's reappearance remove
		if (row[row_ind].cells[td_ind].innerHTML === '' && this.int !== 0) {
			row[row_ind].cells[td_ind].innerHTML = this.create_html_goblin()
			this.display_goblin += 1
			setTimeout(() => row[row_ind].cells[td_ind].innerHTML = '', 1800)
			// }


		}
	}

	stopInterval(ind: any) {
		if (this.display_goblin === this.int || this.int === 0) {

			clearInterval(ind);
		}
	}

}



