import {NgModule} from '@angular/core';
import {BingoComponent} from './bingo/bingo.component';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/bingo', pathMatch: 'full' },
  { path: 'bingo/play', component: BingoComponent },
  { path: 'bingo', component: LandingPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
