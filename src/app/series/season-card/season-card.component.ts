import {Component, Input, OnInit} from '@angular/core';
import {Season} from "../../model/series-response";

@Component({
	selector: 'app-season-card',
	templateUrl: './season-card.component.html',
	styleUrls: ['./season-card.component.css']
})
export class SeasonCardComponent implements OnInit {

	@Input()
	season!: Season;
	episodesCollapsed: boolean = true;

	constructor() {
	}

	ngOnInit(): void {
	}

}
