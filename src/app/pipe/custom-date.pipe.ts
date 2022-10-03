import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

	transform(date: string): unknown {
		let parts = date.split(" ");
		return parts[0] + '/' + this.getMonthNumberFromName(parts[1]) + '/' + parts[2];
	}

	getMonthNumberFromName(name: string) {
		switch (name) {
			case 'Jan.':
				return '01';
			case 'Feb.':
				return '02';
			case 'Mar.':
				return '03';
			case 'Apr.':
				return '04';
			case 'May':
				return '05';
			case 'Jun.':
				return '06';
			case 'Jul.':
				return '07';
			case 'Aug.':
				return '08';
			case 'Sep.':
				return '09';
			case 'Oct.':
				return '10';
			case 'Nov.':
				return '11'
			case 'Dec.':
				return '12';
			default:
				return name;
		}
	}
}
