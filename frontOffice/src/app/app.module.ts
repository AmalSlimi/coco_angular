import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angular2-qrcode';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccommodationComponent } from './frontOffice/accommodationModule/accommodationModule/accommodation/accommodation.component';
import { AddAccommodationComponent } from './frontOffice/accommodationModule/accommodationModule/add-accommodation/add-accommodation.component';
import { AddCategoryComponent } from './frontOffice/accommodationModule/accommodationModule/add-category/add-category.component';
import { AddRoomComponent } from './frontOffice/accommodationModule/accommodationModule/add-room/add-room.component';
import { AddSubCategoryComponent } from './frontOffice/accommodationModule/accommodationModule/add-sub-category/add-sub-category.component';
import { CategoryComponent } from './frontOffice/accommodationModule/accommodationModule/category/category.component';
import { DetailsAccomodationComponent } from './frontOffice/accommodationModule/accommodationModule/details-accomodation/details-accomodation.component';
import { DetailsRoomComponent } from './frontOffice/accommodationModule/accommodationModule/details-room/details-room.component';
import { RoomComponent } from './frontOffice/accommodationModule/accommodationModule/room/room.component';
import { SubCategoryComponent } from './frontOffice/accommodationModule/accommodationModule/sub-category/sub-category.component';
import { UpdateAccommodationComponent } from './frontOffice/accommodationModule/accommodationModule/update-accommodation/update-accommodation.component';
import { UpdateCategoryComponent } from './frontOffice/accommodationModule/accommodationModule/update-category/update-category.component';
import { UpdateRoomComponent } from './frontOffice/accommodationModule/accommodationModule/update-room/update-room.component';
import { UpdateSubcategoryComponent } from './frontOffice/accommodationModule/accommodationModule/update-subcategory/update-subcategory.component';
import { MapComponent } from './frontOffice/accommodationModule/map/map.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './app-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    AccommodationComponent,
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
    MapComponent,
    NavBarComponent,
    FilterPipe


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    QRCodeModule,
    Ng2SearchPipeModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
