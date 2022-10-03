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
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SeriesComponent} from './series/series.component';
import {SeriesCardComponent} from './series/series-card/series-card.component';
import {SeasonCardComponent} from './series/season-card/season-card.component';
import {EpisodeCardComponent} from './series/episode-card/episode-card.component';
import {AccordionModule} from "ngx-bootstrap/accordion";
import {CollapseModule} from "ngx-bootstrap/collapse";
import { CustomDatePipe } from './pipe/custom-date.pipe';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		LogComponent,
		LogTableComponent,
		SeriesComponent,
		SeriesCardComponent,
		SeasonCardComponent,
		EpisodeCardComponent,
  CustomDatePipe
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		BsDropdownModule,
		AccordionModule,
		CollapseModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
