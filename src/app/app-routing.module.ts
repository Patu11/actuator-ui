import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LogComponent} from "./log/log.component";
import {SeriesComponent} from "./series/series.component";
import {ActuatorComponent} from "./actuator/actuator.component";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
	{path: 'login', component: LoginComponent},
	{path: 'logs', component: LogComponent},
	{path: 'series', component: SeriesComponent},
	{path: 'actuator', component: ActuatorComponent},
	{path: 'welcome', component: WelcomeComponent},
	{path: '', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
