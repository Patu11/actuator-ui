export function createToken() {
	let token = "";
	let username = localStorage.getItem("USERNAME");
	let password = localStorage.getItem("PASSWORD");
	if (username && password) {
		token = "Basic " + btoa(username + ":" + password);
	}
	return token;
}
