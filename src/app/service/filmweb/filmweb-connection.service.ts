import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {LinksResponse} from 'src/app/model/response';
import {createToken} from "../../utils/token-utils";

@Injectable({
	providedIn: 'root'
})
export class FilmwebConnectionService {
	ACTUATOR_URL = 'http://localhost:8080/actuator';

	constructor(private http: HttpClient) {
	}

	getActuator() {
		const headers = new HttpHeaders({
			'Authorization': createToken()
		});

		const requestOptions = {headers: headers};

		return this.http.get<LinksResponse>(this.ACTUATOR_URL, requestOptions);
	}
}
