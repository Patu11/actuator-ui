import {Component, Input, OnInit} from '@angular/core';
import {Episode} from "../../model/series-response";

@Component({
	selector: 'app-episode-card',
	templateUrl: './episode-card.component.html',
	styleUrls: ['./episode-card.component.css']
})
export class EpisodeCardComponent implements OnInit {

	@Input()
	episode!: Episode;

	@Input()
	episodeIndex!: number;

	infoCollapsed: boolean = true;

	constructor() {
	}

	ngOnInit(): void {
	}

}
