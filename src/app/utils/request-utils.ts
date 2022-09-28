import {HttpHeaders} from "@angular/common/http";

export function createToken() {
	let token = "";
	let username = localStorage.getItem("USERNAME");
	let password = localStorage.getItem("PASSWORD");
	if (username && password) {
		token = "Basic " + btoa(username + ":" + password);
	}
	return token;
}

export function createOptionsWithAuthHeader() {
	const headers = new HttpHeaders({
		'Authorization': createToken()
	});

	return {headers: headers};
}

export function createTokenWithGivenCredentials(username: string, password: string) {
	return 'Basic: ' + btoa(username + ':' + password);
}

export function createOptionsWithAuthHeaderWithGivenCredentials(username: string, password: string) {
	const headers = new HttpHeaders({
		'Authorization': createTokenWithGivenCredentials(username, password)
	});
	return {headers: headers};
}
