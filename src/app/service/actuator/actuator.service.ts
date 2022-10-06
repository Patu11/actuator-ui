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
	HEALTH_STATUS_URL = this.ACTUATOR_URL + '/health';
	METRICS_URL = this.ACTUATOR_URL + '/metrics';
	DISK_TOTAL_URL = this.METRICS_URL + '/disk.total';
	DISK_FREE_URL = this.METRICS_URL + '/disk.free';
	UPTIME_URL = this.METRICS_URL + '/process.uptime'
	CPU_USAGE_URL = this.METRICS_URL + '/system.cpu.usage';

	constructor(private http: HttpClient) {
	}

	getActuator() {
		return this.http.get<ActuatorResponse>(this.ACTUATOR_URL, createOptionsWithAuthHeader());
	}

	getHealthStatus() {
		return this.http.get<any>(this.HEALTH_STATUS_URL, createOptionsWithAuthHeader());
	}

	getDiskTotal() {
		return this.http.get<any>(this.DISK_TOTAL_URL, createOptionsWithAuthHeader());
	}

	getDiskFree() {
		return this.http.get<any>(this.DISK_FREE_URL, createOptionsWithAuthHeader());
	}

	getUptime() {
		return this.http.get<any>(this.UPTIME_URL, createOptionsWithAuthHeader());
	}

	getSystemCpuUsage() {
		return this.http.get<any>(this.CPU_USAGE_URL, createOptionsWithAuthHeader());
	}
}
