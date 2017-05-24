import { Component, OnInit } from '@angular/core';

import { LogregService } from "./../logreg.service";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginInfo: object;
	errors: object;

	constructor(private logregService: LogregService) { }

	ngOnInit() {
		this.loginInfo = {};
	}

	login(){
		this.logregService.loginUser(this.loginInfo)
			.then((data) => {
				this.loginInfo = {};
				this.errors = {};
				console.log(data)
				this.logregService.currentUser = {_id: data._id, first_name: data.first_name, last_name: data.last_name};
			})
			.catch(err => {
				console.log(err);
				this.errors = err;
			});
	}

}
