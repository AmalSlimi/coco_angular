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


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CategoryComponent } from './backOffice/accommodationModule/category/category.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UpdateCategoryComponent } from './backOffice/accommodationModule/update-category/update-category.component';
import { BsComponentRef } from 'ngx-bootstrap/component-loader';
import { SubCategoryComponent } from './backOffice/accommodationModule/sub-category/sub-category.component';
import { AddSubCategoryComponent } from './backOffice/accommodationModule/add-sub-category/add-sub-category.component';
import { UpdateSubcategoryComponent } from './backOffice/accommodationModule/update-subcategory/update-subcategory.component';
import { QRCodeModule } from 'angular2-qrcode';
import { AddRoomComponent } from './backOffice/accommodationModule/add-room/add-room.component';
import { AddAccommodationComponent } from './backOffice/accommodationModule/add-accommodation/add-accommodation.component';
import { AddCategoryComponent } from './backOffice/accommodationModule/add-category/add-category.component';
import { UpdateRoomComponent } from './backOffice/accommodationModule/update-room/update-room.component';
import { UpdateAccommodationComponent } from './backOffice/accommodationModule/update-accommodation/update-accommodation.component';
import { DetailsAccomodationComponent } from './backOffice/accommodationModule/details-accomodation/details-accomodation.component';
import { DetailsRoomComponent } from './backOffice/accommodationModule/details-room/details-room.component';
import { ImageByRoomComponent } from './backOffice/image-by-room/image-by-room.component';
import { MapComponent } from './backOffice/map/map.component';
import { FilterPipe } from './app-filter.pipe';


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
    CategoryComponent,
    UpdateCategoryComponent,
    SubCategoryComponent,
    AddSubCategoryComponent,
    UpdateSubcategoryComponent,
    AddRoomComponent,
    AddAccommodationComponent,
    AddCategoryComponent,
    UpdateRoomComponent,
    UpdateAccommodationComponent,
    DetailsAccomodationComponent,
    DetailsRoomComponent,
    ImageByRoomComponent,
    MapComponent,
    FilterPipe

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    QRCodeModule,


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
