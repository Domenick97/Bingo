import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayComputerComponent } from './play-computer/play-computer.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'play', component: PlayComputerComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
