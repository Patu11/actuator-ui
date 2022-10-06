import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-system-cpu-usage',
	templateUrl: './system-cpu-usage.component.html',
	styleUrls: ['./system-cpu-usage.component.css']
})
export class SystemCpuUsageComponent implements OnInit {
	@Input()
	cpuUsage!: number;

	constructor() {
	}

	ngOnInit(): void {

	}

}
