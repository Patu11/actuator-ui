import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActuatorResponse} from "../../model/actuator-response";
import {createOptionsWithAuthHeader} from "../../utils/request-utils";
import {environment} from "../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class ActuatorService {
	ACTUATOR_URL = environment.API_URL + '/actuator';

	constructor(private http: HttpClient) {
	}

	getActuator() {
		return this.http.get<ActuatorResponse>(this.ACTUATOR_URL, createOptionsWithAuthHeader());
	}
}
