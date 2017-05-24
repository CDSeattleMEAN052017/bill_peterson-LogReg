import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from "@angular/http"
import { User } from "./user"
import "rxjs"

const HEADERS = new Headers({"Content-Type": "application/json"})
const OPTIONS = new RequestOptions({headers: HEADERS})

@Injectable()
export class LogregService {

	currentUser: object = {};

	constructor(private http: Http) { }

	registerUser(user: User){
		return this.http.post("/register", user, OPTIONS).toPromise()
	}

	loginUser(loginInfo: object){
		return this.http.post("/login", loginInfo, OPTIONS).map(data => data.json()).toPromise()
	}


}
