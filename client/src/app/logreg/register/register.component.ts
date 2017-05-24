import { Component, OnInit } from '@angular/core';

import { User } from "./../user";
import { LogregService } from "./../logreg.service";

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	newUser: User;
	confirmPassword: string;
	today: string;

	constructor(private logregService: LogregService) { }

	ngOnInit() {
		this.newUser = new User;
		let todayTemp = new Date();
		let todayYear = todayTemp.getFullYear();
		let todayMonth: any = todayTemp.getMonth() + 1;
		if(todayMonth < 10){
			todayMonth = "0" + todayMonth;
		}
		let todayDate =  todayTemp.getDate();
		this.today = todayYear + "-" + todayMonth + "-" + todayDate;
	}

	register(){
		this.logregService.registerUser(this.newUser)
			.then((stuff) => {

				this.newUser = new User;
				this.confirmPassword = "";
			})
			.catch(err => {console.log(err)});
	}

}
