import {Component, OnInit} from '@angular/core';
import {LogService} from "../service/log/log.service";
import {LogResponse} from "../model/log-response";
import {Router} from "@angular/router";

@Component({
	selector: 'app-log',
	templateUrl: './log.component.html',
	styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

	logResponse?: Array<LogResponse>;
	clickedLogResponse?: LogResponse;

	constructor(private logService: LogService, private router: Router) {
	}

	onLogFileClick(logResponse: LogResponse) {
		this.clickedLogResponse = logResponse;
	}

	ngOnInit(): void {
		this.logService.getLogs().subscribe({
			next: data => {
				this.logResponse = data as Array<LogResponse>
			},
			error: () => {
				this.router.navigate(['']);
			}
		});
	}
}
