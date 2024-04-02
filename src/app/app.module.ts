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
import { HttpClientModule} from '@angular/common/http';
import { AddBusComponent } from './backOffice/busModule/add-bus/add-bus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateBusComponent } from './backOffice/busModule/update-bus/update-bus.component';
import { UpdateStopComponent } from './backOffice/busModule/update-stop/update-stop.component';
import { AddStopComponent } from './backOffice/busModule/add-stop/add-stop.component';
import { AddtripComponent } from './backOffice/busModule/addtrip/addtrip.component';
import { UpdateTripComponent } from './backOffice/busModule/updatetrip/updatetrip.component';
import { AddtripStopComponent } from './backOffice/busModule/addtrip-stop/addtrip-stop.component';
import { TripStopComponent } from './backOffice/busModule/trip-stop/trip-stop.component';
import { UpdatetripStopComponent } from './backOffice/busModule/updatetrip-stop/updatetrip-stop.component';
import { HeaderFrontComponent } from './frontOffice/header-front/header-front.component';
import { FooterFrontComponent } from './frontOffice/footer-front/footer-front.component';
import { CarouselComponent } from './frontOffice/carousel/carousel.component';
import { HomeFrontComponent } from './frontOffice/home-front/home-front.component';
import { UtripComponent } from './frontOffice/busManagment/utrip/utrip.component';
import { SubscriptionComponent } from './frontOffice/busManagment/subscription/subscription.component';
import { AddsubscriptionComponent } from './frontOffice/busManagment/addsubscription/addsubscription.component';
import { StripeComponent } from './frontOffice/busManagment/stripe/stripe.component';
import { CheckSubComponent } from './backOffice/busModule/check-sub/check-sub.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './frontOffice/busManagment/map/map.component';






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
    AddBusComponent,
    UpdateBusComponent,
    UpdateStopComponent,
    AddStopComponent,
    UpdateStopComponent,
    AddStopComponent,
    AddtripComponent,
    UpdateTripComponent,
    AddtripStopComponent,
    AddtripStopComponent,
    TripStopComponent,
    UpdatetripStopComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    CarouselComponent,
    HomeFrontComponent,
    UtripComponent,
    SubscriptionComponent,
    AddsubscriptionComponent,
    StripeComponent,
    CheckSubComponent,
    MapComponent,











  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
