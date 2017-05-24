import { Component, OnInit, OnChanges } from '@angular/core';

import { LogregService } from "./logreg.service";

@Component({
	selector: 'app-logreg',
	templateUrl: './logreg.component.html',
	styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {


	constructor(private logregService: LogregService) { }

	ngOnInit() {
	}

}
