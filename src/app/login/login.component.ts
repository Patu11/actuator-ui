import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username?: string;
	password?: string;

	constructor() {
	}

	onLogin() {
		if (this.username && this.password) {
			console.log(this.username + ":" + this.password)
			localStorage.setItem("USERNAME", this.username);
			localStorage.setItem("PASSWORD", this.password);
		}
	}

	ngOnInit(): void {
	}

}
