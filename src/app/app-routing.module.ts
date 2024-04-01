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

import { AddBusComponent } from './backOffice/busModule/add-bus/add-bus.component';
import { UpdateBusComponent } from './backOffice/busModule/update-bus/update-bus.component';
import { UpdateStopComponent } from './backOffice/busModule/update-stop/update-stop.component';
import { AddStopComponent } from './backOffice/busModule/add-stop/add-stop.component';
import { AddtripComponent } from './backOffice/busModule/addtrip/addtrip.component';
import { UpdateTripComponent } from './backOffice/busModule/updatetrip/updatetrip.component';
import { AddtripStopComponent } from './backOffice/busModule/addtrip-stop/addtrip-stop.component';
import { TripStopComponent } from './backOffice/busModule/trip-stop/trip-stop.component';
import { UpdatetripStopComponent } from './backOffice/busModule/updatetrip-stop/updatetrip-stop.component';
import { HomeFrontComponent } from './frontOffice/home-front/home-front.component';
import { SubscriptionComponent } from './frontOffice/busManagment/subscription/subscription.component';
import { UtripComponent } from './frontOffice/busManagment/utrip/utrip.component';
import { AddsubscriptionComponent } from './frontOffice/busManagment/addsubscription/addsubscription.component';
import { StripeComponent } from './frontOffice/busManagment/stripe/stripe.component';
import { CheckSubComponent } from './backOffice/busModule/check-sub/check-sub.component';





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
  {path:'update-bus/:id',component:UpdateBusComponent},
  {path:'update-stop/:id',component:UpdateStopComponent},
  {path:'add-stop',component:AddStopComponent},
  {path:'add-trip',component:AddtripComponent},
  {path:'update-trip/:id',component:UpdateTripComponent},
  {path:'add-tripStop',component:AddtripStopComponent},
  {path:'tripStop',component:TripStopComponent},
  {path:'update-tripStop/:id',component:UpdatetripStopComponent},
  {path:'checksub',component:CheckSubComponent},



  //ghriibi u
  {path: 'sub', component: SubscriptionComponent},
  {path: 'utrip', component: UtripComponent},
  {path:'add-sub/:id',component:AddsubscriptionComponent},
  {path: 'strip', component: StripeComponent},




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
