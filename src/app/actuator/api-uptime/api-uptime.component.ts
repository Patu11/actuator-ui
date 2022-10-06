import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-api-uptime',
	templateUrl: './api-uptime.component.html',
	styleUrls: ['./api-uptime.component.css']
})
export class ApiUptimeComponent implements OnInit {

	@Input()
	uptime!: number;

	constructor() {
	}

	ngOnInit(): void {
	}

}
