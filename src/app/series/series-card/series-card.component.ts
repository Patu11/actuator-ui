import {Component, Input, OnInit} from '@angular/core';
import {SeriesResponse} from "../../model/series-response";

@Component({
	selector: 'app-series-card',
	templateUrl: './series-card.component.html',
	styleUrls: ['./series-card.component.css',]
})
export class SeriesCardComponent implements OnInit {

	@Input()
	series!: SeriesResponse
	showSeasons: boolean = false;

	constructor() {
	}

	toggleShowSeasons() {
		this.showSeasons = !this.showSeasons;
	}

	ngOnInit(): void {
	}

}
