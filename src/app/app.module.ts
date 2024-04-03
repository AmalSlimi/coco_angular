import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule}  from "ngx-pagination";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { AppRoutingModule } from './app-routing.module';
//import * as BadWordsFilter from "bad-words";
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
import {HomeFrontComponent} from './frontOffice/home-front/home-front.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryListComponent } from './category-list/category-list.component';
import {CategoryProductService} from "./MarketPlaceService/category-product.service";
import { RegisterCategoryProductComponent } from './register-category-product/register-category-product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditCategoryComponent } from './edit-category-product/edit-category.component';
import { SubcategoryListComponent } from './subcategory-list/subcategory-list.component';
import { RegisterSubcategoryComponent } from './register-subcategory/register-subcategory.component';
import { EditSubcategoryComponent } from './edit-subcategory/edit-subcategory.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
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
    HomeFrontComponent,
    CategoryListComponent,
    RegisterCategoryProductComponent,
    EditCategoryComponent,
    SubcategoryListComponent,
    RegisterSubcategoryComponent,
    EditSubcategoryComponent,
    ProductListComponent,
    RegisterProductComponent,
    EditProductComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [

   /* { provide: 'Filter', useValue: new BadWordsFilter() }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
