import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
	providedIn: 'root'
})
export class LogService {
	LOG_URL = 'http://localhost:8080/logs';

	constructor(private http: HttpClient) {
	}

	getLogs() {

	}
}
