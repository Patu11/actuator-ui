import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
	providedIn: 'root'
})
export class FilmwebConnectionService {
	FILMWEB_URL = 'http://localhost:8080/api/v1';

	constructor(private http: HttpClient) {
	}
}
