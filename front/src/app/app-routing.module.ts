import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBackComponent } from './backOffice/home-back/home-back.component';
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
import { CategoryComponent } from './backOffice/accommodationModule/category/category.component';
import { SubCategoryComponent } from './backOffice/accommodationModule/sub-category/sub-category.component';
import { UpdateRoomComponent } from './backOffice/accommodationModule/update-room/update-room.component';
import { UpdateAccommodationComponent } from './backOffice/accommodationModule/update-accommodation/update-accommodation.component';
import { AddRoomComponent } from './backOffice/accommodationModule/add-room/add-room.component';
import { AddAccommodationComponent } from './backOffice/accommodationModule/add-accommodation/add-accommodation.component';
import { DetailsAccomodationComponent } from './backOffice/accommodationModule/details-accomodation/details-accomodation.component';
import { DetailsRoomComponent } from './backOffice/accommodationModule/details-room/details-room.component';
import { ImageByRoomComponent } from './backOffice/image-by-room/image-by-room.component';
import { AddCategoryComponent } from './backOffice/accommodationModule/add-category/add-category.component';
import { UpdateCategoryComponent } from './backOffice/accommodationModule/update-category/update-category.component';
import { AddSubCategoryComponent } from './backOffice/accommodationModule/add-sub-category/add-sub-category.component';
import { UpdateSubcategoryComponent } from './backOffice/accommodationModule/update-subcategory/update-subcategory.component';


const routes: Routes = [
  {path:'',component:HomeBackComponent},

  //amal
  {path:'profile',component:ProfileComponent},
//hadil
  {path:'addRoom',component:AddRoomComponent},
  {path:'update/:id',component:UpdateRoomComponent},
  {path:'updateAccomodation/:id',component:UpdateAccommodationComponent},
  {path:'addAccomodation',component:AddAccommodationComponent},
  {path:'getAllAccomodation',component:AccommodationComponent},
  {path:'getAllRoom',component:RoomComponent},
  {path:'getAccomodationById/:id',component:DetailsAccomodationComponent},
  {path:'getRoomById/:id',component:DetailsRoomComponent},
  {path:'addCat',component:AddCategoryComponent},
  {path:'updateCategory/:id',component:UpdateCategoryComponent},
  {path:'addSubCat',component:AddSubCategoryComponent},
  {path:'getAllSubCategories',component:SubCategoryComponent},
  {path:'getAllCategories',component:CategoryComponent},
  { path: 'update-subcategory/:id', component: UpdateSubcategoryComponent },



  //special
  {path:'car',component:CarComponent},
  {path:'driver',component:DriversComponent},

  //sysy
  {path:'product',component:ProductComponent},
  {path:'productcategory',component:ProductCategoryComponent},

  // ghribii
  {path:'bus',component:BusComponent},
  {path:'stop',component:StopComponent},
  {path:'trip',component:TripComponent},

  //hdayla
  {path:'room',component:RoomComponent},
  {path:'accommodation',component:AccommodationComponent},
  {path:'cat',component:CategoryComponent},
  {path:'subcat',component:SubCategoryComponent},

  //ramsys
  {path:'post',component:PostComponent},
  {path:'comment',component:CommentComponent},


  //charts
  {path:'chartjs',component:ChartJsComponent},
  {path:'apexcharts',component:ApexchartsComponent},
  {path:'echarts',component:EchartsComponent},
 //forms
 {path:'form-elements',component:FormElementsComponent},
 {path:'form-layouts',component:FormLayoutsComponent},
 //table
 {path:'table',component:DataTablesComponent},













];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
