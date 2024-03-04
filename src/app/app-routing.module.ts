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
import { HomeFrontComponent } from './frontOffice/home-front/home-front.component';
import { AddBusComponent } from './backOffice/busModule/add-bus/add-bus.component';

const routes: Routes = [
  {path:'',component:HomeBackComponent},

  //amal
  {path:'profile',component:ProfileComponent},


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
  {path:'add-bus',component:AddBusComponent},


  //hdayla
  {path:'room',component:RoomComponent},
  {path:'accommodation',component:AccommodationComponent},

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

 //front
 {path:'coco',component:HomeFrontComponent},











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
