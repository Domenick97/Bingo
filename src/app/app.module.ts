import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {BingoComponent} from './bingo/bingo.component';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './footer/footer.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import { PlayerSettingsComponent } from './player-settings/player-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    BingoComponent,
    FooterComponent,
    LandingPageComponent,
    GameSettingsComponent,
    PlayerSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
