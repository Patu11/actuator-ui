import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	LOGIN_URL = environment.API_URL + '/auth/';

	constructor(private http: HttpClient) {
	}

	login(username: string, password: string) {
		return this.http.get(this.LOGIN_URL + btoa(username + ":" + password));
	}
}
