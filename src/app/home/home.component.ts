import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	docsUrl: string = $ENV.API_URL + '/docs';

	constructor() {
	}

	openDocs() {
		window.open(this.docsUrl, '_blank');
	}

	isLogged(): boolean {
		let username = sessionStorage.getItem("USERNAME");
		let password = sessionStorage.getItem("PASSWORD");
		return !!username && !!password;
	}

	ngOnInit(): void {
	}
}
