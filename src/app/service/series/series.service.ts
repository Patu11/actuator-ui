import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
	providedIn: 'root'
})
export class SeriesService {
	SERIES_URL = environment.API_URL + '/api/v1/{service}/series'

	constructor(private http: HttpClient) {
	}

}
