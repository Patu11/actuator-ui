import {HttpHeaders} from "@angular/common/http";

export function createToken() {
	let token = "";
	let username = sessionStorage.getItem("USERNAME");
	let password = sessionStorage.getItem("PASSWORD");
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

export function determineService(seriesUrl: string) {
	if (seriesUrl.includes('imdb')) return 'imdb'
	else if (seriesUrl.includes('filmweb')) return 'filmweb'
	else return 'NOT_IMPLEMENTED'
}
