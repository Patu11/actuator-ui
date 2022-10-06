import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-disk-metrics',
	templateUrl: './disk-metrics.component.html',
	styleUrls: ['./disk-metrics.component.css']
})
export class DiskMetricsComponent implements OnInit {
	@Input()
	diskTotal!: number;

	@Input()
	diskFree!: number;

	constructor() {
	}

	ngOnInit(): void {

	}

}
