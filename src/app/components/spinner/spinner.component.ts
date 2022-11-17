import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-spinner',
	template: `
		<div class="spinner" [ngClass]="'size-' + size">
		</div>
	`,
	styles: [`
		.spinner {
			background-image: url(../../../assets/images/spinner.svg);
			background-size: contain;
		}
			.size-200 {
				width: 200px;
				height: 200px;
			}
			.size-100 {
				width: 100px;
				height: 100px;
			}
	`]
})
export class SpinnerComponent {

	@Input() size: number = 200;

	constructor() { }

}
