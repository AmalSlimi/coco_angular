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
import { RegisterComponent } from './backOffice/userManagement/register/register.component';
import { LoginComponent } from './backOffice/userManagement/login/login.component';
import { ExternalUserComponent } from './frontOffice/external-user/external-user.component';
import { OverviewComponent } from './backOffice/userManagement/overview/overview.component';
import { HomeFrontComponent } from './frontOffice/home-front/home-front.component';
import { DashboardComponent } from './frontOffice/userModule/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { MyProfileComponent } from './frontOffice/userModule/my-profile/my-profile.component';
import { BusFrontComponent } from './frontOffice/busManagment/bus-front/bus-front.component';
import { TripFrontComponent } from './frontOffice/busManagment/trip-front/trip-front.component';
import { Role } from './backOffice/userManagement/model/Role';
import { AccessDeniedComponent } from './frontOffice/access-denied/access-denied.component';
import { RoleStatsComponent } from './backOffice/userManagement/role-stats/role-stats.component';

const routes: Routes = [
  
  {path:'signup',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  //default route
  {path:'', redirectTo :'/login', pathMatch:'full'},
  

  //amal
  {
    path: 'admin',
    component: HomeBackComponent,
    canActivate: [AuthGuard]
    
  },

  {path:'profile',component:ProfileComponent,canActivate: [AuthGuard]},
  {path:'overview',component:OverviewComponent,canActivate: [AuthGuard]},
  {path:'role-stats',component:RoleStatsComponent},

  //front
{path:'coco',component:HomeFrontComponent,canActivate: [AuthGuard]},
{path:'myProfile',component:MyProfileComponent},
{path:'external-user',component:ExternalUserComponent,canActivate: [AuthGuard]},
{path:'dashboard',component:DashboardComponent,canActivate: [AuthGuard]},
  

  //special
  {path:'car',component:CarComponent,canActivate: [AuthGuard]},
  {path:'driver',component:DriversComponent,canActivate: [AuthGuard]},

  //sysy
  {path:'product',component:ProductComponent,canActivate: [AuthGuard]},
  {path:'productcategory',component:ProductCategoryComponent,canActivate: [AuthGuard]},

  // ghribii
  {path:'bus',component:BusComponent,canActivate: [AuthGuard]},
  {path:'stop',component:StopComponent,canActivate: [AuthGuard]},
  {path:'trip',component:TripComponent,canActivate: [AuthGuard]},
  //ghribi front
  {path:'bus-front',component:BusFrontComponent},
  {path:'trip-front',component:TripFrontComponent},


  //hdayla
  {path:'room',component:RoomComponent,canActivate: [AuthGuard]},
  {path:'accommodation',component:AccommodationComponent,canActivate: [AuthGuard]},

  //ramsys
  {path:'post',component:PostComponent,canActivate: [AuthGuard]},
  {path:'comment',component:CommentComponent,canActivate: [AuthGuard]},

  
  //charts
  {path:'chartjs',component:ChartJsComponent},
  {path:'apexcharts',component:ApexchartsComponent},
  {path:'echarts',component:EchartsComponent},
 //forms
 {path:'form-elements',component:FormElementsComponent},
 {path:'form-layouts',component:FormLayoutsComponent},
 //table
 {path:'table',component:DataTablesComponent},

 
 { path: 'access-denied', component: AccessDeniedComponent },
 








  


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
