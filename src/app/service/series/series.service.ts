import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {determineService} from "../../utils/request-utils";

@Injectable({
	providedIn: 'root'
})
export class SeriesService {
	SERIES_URL = environment.API_URL + '/api/v1/'

	constructor(private http: HttpClient) {
	}

	getSeriesByUrl(seriesUrl: string) {
		let service = determineService(seriesUrl);

		const body = {
			seriesUrl: seriesUrl
		}

		return this.http.post(this.SERIES_URL + service + '/series', body);
	}

}
