import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor() {
	}

	isLogged(): boolean {
		let username = sessionStorage.getItem("USERNAME");
		let password = sessionStorage.getItem("PASSWORD");
		return !!username && !!password;
	}

	ngOnInit(): void {
	}
}
