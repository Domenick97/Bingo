import {NgModule} from '@angular/core';
import {BingoComponent} from './bingo/bingo.component';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: 'bingo/play', component: BingoComponent },
  { path: '', component: LandingPageComponent },
  { path: 'bingo/settings', component: SettingsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
