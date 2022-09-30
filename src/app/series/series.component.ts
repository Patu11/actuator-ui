import {Component, OnInit} from '@angular/core';
import {SeriesService} from "../service/series/series.service";
import {SeriesResponse} from "../model/series-response";

@Component({
	selector: 'app-series',
	templateUrl: './series.component.html',
	styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
	seriesUrl?: string;
	seriesResponse?: SeriesResponse;
	isSearching: boolean = false;
	searchingError: boolean = false;

	constructor(private seriesService: SeriesService) {
	}

	onSearch() {
		if (this.seriesUrl) {
			this.isSearching = true;
			this.seriesService.getSeriesByUrl(this.seriesUrl).subscribe({
				next: data => {
					this.seriesResponse = data as SeriesResponse;
					this.isSearching = false;
					this.searchingError = false;
				},
				error: () => {
					this.isSearching = false;
					this.searchingError = true;
				}
			});
		}
	}

	ngOnInit(): void {

	}

}
