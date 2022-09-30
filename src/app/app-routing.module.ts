import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LogComponent} from "./log/log.component";
import {SeriesComponent} from "./series/series.component";

const routes: Routes = [
	{path: 'login', component: LoginComponent},
	{path: 'logs', component: LogComponent},
	{path: 'series', component: SeriesComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
