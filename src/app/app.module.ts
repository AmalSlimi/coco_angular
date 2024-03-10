import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeBackComponent } from './backOffice/home-back/home-back.component';
import { FooterBackComponent } from './backOffice/footer-back/footer-back.component';
import { HeaderBackComponent } from './backOffice/header-back/header-back.component';
import { NavbarBackComponent } from './backOffice/navbar-back/navbar-back.component';
import { FormElementsComponent } from './backOffice/form-back/form-elements/form-elements.component';
import { FormLayoutsComponent } from './backOffice/form-back/form-layouts/form-layouts.component';
import { CarComponent } from './backOffice/carpoolModule/car/car.component';
import { DriversComponent } from './backOffice/carpoolModule/drivers/drivers.component';
import { ProductComponent } from './backOffice/marketPlaceModule/product/product.component';
import { ProductCategoryComponent } from './backOffice/marketPlaceModule/product-category/product-category.component';
import { BusComponent } from './backOffice/busModule/bus/bus.component';
import { StopComponent } from './backOffice/busModule/stop/stop.component';
import { TripComponent } from './backOffice/busModule/trip/trip.component';
import { RoomComponent } from './backOffice/accommodationModule/room/room.component';
import { AccommodationComponent } from './backOffice/accommodationModule/accommodation/accommodation.component';
import { PostComponent } from './backOffice/forumModule/post/post.component';
import { CommentComponent } from './backOffice/forumModule/comment/comment.component';
import { DataTablesComponent } from './backOffice/data-tables/data-tables.component';
import { ChartJsComponent } from './backOffice/charts/chart-js/chart-js.component';
import { ApexchartsComponent } from './backOffice/charts/apexcharts/apexcharts.component';
import { EchartsComponent } from './backOffice/charts/echarts/echarts.component';
import { ProfileComponent } from './backOffice/userManagement/profile/profile.component';
import { RegisterComponent } from './backOffice/userManagement/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './backOffice/userManagement/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderFrontComponent } from './frontOffice/header-front/header-front.component';
import { FooterFrontComponent } from './frontOffice/footer-front/footer-front.component';
import { CarouselComponent } from './frontOffice/carousel/carousel.component';
import { ExternalUserComponent } from './frontOffice/external-user/external-user.component';
import { OverviewComponent } from './backOffice/userManagement/overview/overview.component';
import { HomeFrontComponent } from './frontOffice/home-front/home-front.component';
import { DashboardComponent } from './frontOffice/userModule/dashboard/dashboard.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { MyProfileComponent } from './frontOffice/userModule/my-profile/my-profile.component';
import { BusFrontComponent } from './frontOffice/busManagment/bus-front/bus-front.component';
import { TripFrontComponent } from './frontOffice/busManagment/trip-front/trip-front.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeBackComponent,
    FooterBackComponent,
    HeaderBackComponent,
    NavbarBackComponent,
    FormElementsComponent,
    FormLayoutsComponent,
    CarComponent,
    DriversComponent,
    ProductComponent,
    ProductCategoryComponent,
    BusComponent,
    StopComponent,
    TripComponent,
    RoomComponent,
    AccommodationComponent,
    PostComponent,
    CommentComponent,
    DataTablesComponent,
    ChartJsComponent,
    ApexchartsComponent,
    EchartsComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    CarouselComponent,
    ExternalUserComponent,
    OverviewComponent,
    HomeFrontComponent,
    DashboardComponent,
    MyProfileComponent,
    BusFrontComponent,
    TripFrontComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
