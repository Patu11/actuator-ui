import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-health-status',
	templateUrl: './health-status.component.html',
	styleUrls: ['./health-status.component.css']
})
export class HealthStatusComponent implements OnInit {
	@Input()
	healthStatus!: string;

	constructor() {
	}

	determineStatusColor() {
		if (this.healthStatus === 'UP') return 'text-success'
		else if (this.healthStatus === 'DOWN') return 'text-danger'
		else return 'text-warning'
	}

	ngOnInit(): void {

	}

}
