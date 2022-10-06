import {Component, OnInit} from '@angular/core';
import {ActuatorService} from "../service/actuator/actuator.service";

@Component({
	selector: 'app-actuator',
	templateUrl: './actuator.component.html',
	styleUrls: ['./actuator.component.css']
})
export class ActuatorComponent implements OnInit {
	uptime: number = 0;
	diskTotal: number = 0;
	diskFree: number = 0;
	healthStatus: string = 'UNKNOWN';
	cpuUsage: number = 0;

	constructor(private actuatorService: ActuatorService) {
	}


	ngOnInit(): void {
		this.actuatorService.getHealthStatus().subscribe({
			next: data => this.healthStatus = data.status
		});
		this.actuatorService.getDiskTotal().subscribe({
			next: data => this.diskTotal = data.measurements[0].value
		});
		this.actuatorService.getDiskFree().subscribe({
			next: data => this.diskFree = data.measurements[0].value
		});
		this.actuatorService.getUptime().subscribe({
			next: data => this.uptime = data.measurements[0].value
		});
		this.actuatorService.getSystemCpuUsage().subscribe({
			next: data => this.cpuUsage = data.measurements[0].value
		});
	}
}
