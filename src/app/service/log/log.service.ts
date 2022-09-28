import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {createOptionsWithAuthHeader} from "../../utils/request-utils";
import {LogResponse} from "../../model/log-response";

@Injectable({
	providedIn: 'root'
})
export class LogService {
	LOG_URL = 'http://localhost:8080/logs';

	constructor(private http: HttpClient) {
	}

	getLogs() {
		return this.http.get<Array<LogResponse>>(this.LOG_URL, createOptionsWithAuthHeader());
	}
}
