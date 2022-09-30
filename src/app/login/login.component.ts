import {Component, OnInit} from '@angular/core';
import {LoginService} from "../service/login/login.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username?: string;
	password?: string;
	errorMessageVisible: boolean = false;

	constructor(private loginService: LoginService, private router: Router) {
	}

	onLogin() {
		if (this.username && this.password) {
			this.loginService.login(this.username, this.password).subscribe({
				next: () => {
					sessionStorage.setItem("USERNAME", this.username!);
					sessionStorage.setItem("PASSWORD", this.password!);
					this.errorMessageVisible = false;
					this.router.navigate(['']);
				},
				error: () => {
					this.errorMessageVisible = true;
				}
			})

		}
	}

	ngOnInit(): void {
	}

}
