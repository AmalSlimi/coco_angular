import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeFrontComponent} from "./frontOffice/home-front/home-front.component";
import {FooterFrontComponent} from "./frontOffice/footer-front/footer-front.component";
import {HeaderFrontComponent} from "./frontOffice/header-front/header-front.component";
import {CarousalComponent} from "./frontOffice/carousal/carousal.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeFrontComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    CarousalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
