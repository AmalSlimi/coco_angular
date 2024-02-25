import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterBackComponent } from './backOffice/footer-back/footer-back.component';
import { HeaderBackComponent } from './backOffice/header-back/header-back.component';
import { HomeBackComponent } from './backOffice/home-back/home-back.component';
import { HomeFrontComponent } from './frontOffice/home-front/home-front.component';
import { FooterFrontComponent } from './frontOffice/footer-front/footer-front.component';
import { HeaderFrontComponent } from './frontOffice/header-front/header-front.component';
import { SidebarBackComponent } from './backOffice/sidebar-back/sidebar-back.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterBackComponent,
    HeaderBackComponent,
    HomeBackComponent,
    HomeFrontComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    SidebarBackComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
