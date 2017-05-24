import {Routes, RouterModule} from "@angular/router";
import { LoginComponent } from "./logreg/login/login.component";
import { RegisterComponent } from "./logreg/register/register.component";


const APP_ROUTES: Routes = [

	{ path: "", redirectTo: "/list", pathMatch: "full"},

];
export const routing = RouterModule.forRoot(APP_ROUTES);
