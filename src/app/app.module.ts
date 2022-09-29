import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {LogComponent} from './log/log.component';
import {LogTableComponent} from './log/log-table/log-table.component';
import {BaseComponent} from './base/base.component';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		LogComponent,
		LogTableComponent,
		BaseComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		BsDropdownModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
