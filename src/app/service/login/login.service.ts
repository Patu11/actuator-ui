import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	LOGIN_URL = 'http://localhost:8080/auth/';

	constructor(private http: HttpClient) {
	}

	login(username: string, password: string) {
		return this.http.get(this.LOGIN_URL + btoa(username + ":" + password));
	}
}
