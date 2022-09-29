import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {createOptionsWithAuthHeader} from "../../utils/request-utils";
import {LogResponse} from "../../model/log-response";
import {environment} from "../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class LogService {
	LOG_URL = environment.API_URL + '/logs';

	constructor(private http: HttpClient) {
	}

	getLogs() {
		return this.http.get<Array<LogResponse>>(this.LOG_URL, createOptionsWithAuthHeader());
	}
}
