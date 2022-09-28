import {Component, Input, OnInit} from '@angular/core';
import {LogResponse} from "../../model/log-response";

@Component({
	selector: 'app-log-table',
	templateUrl: './log-table.component.html',
	styleUrls: ['./log-table.component.css']
})
export class LogTableComponent implements OnInit {

	@Input()
	singleLog?: LogResponse;

	constructor() {
	}

	ngOnInit(): void {
	}
}
