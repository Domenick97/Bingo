import {NgModule} from '@angular/core';
import {BingoComponent} from './bingo/bingo.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/bingo', pathMatch: 'full' },
  { path: 'bingo', component: BingoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
