import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogregComponent } from './logreg/logreg.component';
import { LoginComponent } from './logreg/login/login.component';
import { RegisterComponent } from './logreg/register/register.component';

import { LogregService } from "./logreg/logreg.service";

@NgModule({
  declarations: [
    AppComponent,
    LogregComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogregService],
  bootstrap: [AppComponent]
})
export class AppModule { }
