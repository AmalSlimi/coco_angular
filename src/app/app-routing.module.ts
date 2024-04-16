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
import { RideListComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/ride-list/ride-list.component';
import { RegisterRideComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/register-ride/register-ride.component';
import { EditRideComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/edit-ride/edit-ride.component';
import { CarListComponent } from './frontOffice/Carpooling_Front/Components_Front/Car_Front/car-list/car-list.component';
import { RegisterCarComponent } from './frontOffice/Carpooling_Front/Components_Front/Car_Front/register-car/register-car.component';
import { EditCarComponent } from './frontOffice/Carpooling_Front/Components_Front/Car_Front/edit-car/edit-car.component';
import { AffectCarToRideComponent } from './frontOffice/Carpooling_Front/Components_Front/Car_Front/affect-car-to-ride/affect-car-to-ride.component';
import { ImageListComponent } from './frontOffice/Carpooling_Front/Components_Front/Image_Front/image-list/image-list.component';
import { AaffichComponent } from './frontOffice/Carpooling_Front/Components_Front/Image_Front/aaffich/aaffich.component';
import { AddImageComponent } from './frontOffice/Carpooling_Front/Components_Front/Image_Front/add-image/add-image.component';
import { AffectImageToCarComponent } from './frontOffice/Carpooling_Front/Components_Front/Image_Front/affect-image-to-car/affect-image-to-car.component';
import { RideDetailsComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/ride-details/ride-details.component';
import { RegisterImageComponent } from './frontOffice/Carpooling_Front/Components_Front/Image_Front/register-image/register-image.component';
import { EditImageComponent } from './frontOffice/Carpooling_Front/Components_Front/Image_Front/edit-image/edit-image.component';
import { LeafletComponent } from './frontOffice/Carpooling_Front/Components_Front/Acceuil/leaflet/leaflet.component';
import { AcceuilComponent } from './frontOffice/Carpooling_Front/Components_Front/Acceuil/acceuil/acceuil.component';
import { FindRidesComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/find-rides/find-rides.component';
import { StepperComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/stepper/stepper.component';
import { InformationComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/information/information.component';
import { ContactComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/contact/contact.component';
import { SecurityComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/security/security.component';
import { DisplayCarddComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/display-cardd/display-cardd.component';
import { FinishComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/finish/finish.component';
import { FirstAddComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/add-Ride/first-add/first-add.component';
import { SearchRidesComponent } from './frontOffice/Carpooling_Front/Components_Front/Ride_Front/search-rides/search-rides.component';
import { AddBusComponent } from './backOffice/busModule/add-bus/add-bus.component';
import { UpdateBusComponent } from './backOffice/busModule/update-bus/update-bus.component';
import { UpdateStopComponent } from './backOffice/busModule/update-stop/update-stop.component';
import { AddStopComponent } from './backOffice/busModule/add-stop/add-stop.component';
import { AddtripComponent } from './backOffice/busModule/addtrip/addtrip.component';
import { UpdateTripComponent } from './backOffice/busModule/updatetrip/updatetrip.component';
import { AddtripStopComponent } from './backOffice/busModule/addtrip-stop/addtrip-stop.component';
import { TripStopComponent } from './backOffice/busModule/trip-stop/trip-stop.component';
import { UpdatetripStopComponent } from './backOffice/busModule/updatetrip-stop/updatetrip-stop.component';
import { CheckSubComponent } from './backOffice/busModule/check-sub/check-sub.component';
import { SubscriptionComponent } from './frontOffice/busManagment/subscription/subscription.component';
import { UtripComponent } from './frontOffice/busManagment/utrip/utrip.component';
import { AddsubscriptionComponent } from './frontOffice/busManagment/addsubscription/addsubscription.component';
import { StripeComponent } from './frontOffice/busManagment/stripe/stripe.component';
import { MapComponent } from './frontOffice/busManagment/map/map.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { RegisterCategoryProductComponent } from './register-category-product/register-category-product.component';
import { EditCategoryComponent } from './edit-category-product/edit-category.component';
import { SubcategoryListComponent } from './subcategory-list/subcategory-list.component';
import { RegisterSubcategoryComponent } from './register-subcategory/register-subcategory.component';
import { EditSubcategoryComponent } from './edit-subcategory/edit-subcategory.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddSubToCatComponent } from './add-sub-to-cat/add-sub-to-cat.component';
import { AddprodtosubcatComponent } from './addprodtosubcat/addprodtosubcat.component';
import { ProductsComponent } from './backOffice/products/products.component';
import { RatingComponent } from './rating/rating.component';
import { PictureproductComponent } from './pictureproduct/pictureproduct.component';
import { FavoriteProductComponent } from './backOffice/favorite-product/favorite-product.component';
import { AddpicturetoproductComponent } from './addpicturetoproduct/addpicturetoproduct.component';
import { AddpicturetoproductfrontComponent } from './addpicturetoproductfront/addpicturetoproductfront.component';
import { AddproductfrontComponent } from './addproductfront/addproductfront.component';

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
{path:'coco',component:HomeFrontComponent},
{path:'myProfile',component:MyProfileComponent},
{path:'external-user',component:ExternalUserComponent},
{path:'dashboard',component:DashboardComponent},
  

  //special
  {path:'car',component:CarComponent},
  {path:'driver',component:DriversComponent},

  {
    path: 'ride-list',
    component: RideListComponent
  },
  {
    path: 'register-ride',
    component: RegisterRideComponent
  }, {
    path: 'edit-ride/:rideId',
    component: EditRideComponent
  },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'register-car',
    component: RegisterCarComponent
  }, {
    path: 'edit-car/:carId',
    component: EditCarComponent
  }, {
    path: 'affect-car',
    component: AffectCarToRideComponent
  }, {
    path: 'image-list',
    component: ImageListComponent
  },  {
    path: 'gallery',
    component: AaffichComponent
  },{
    path: 'addimage',
    component: AddImageComponent
  },
  {
    path: 'affectimage',
    component: AffectImageToCarComponent
  },{
    path: 'cars/:rideId',
    component: RideDetailsComponent
  },

  {
    path: 'register-image',
    component: RegisterImageComponent
  }, {
    path: 'edit-image/:imageId',
    component: EditImageComponent
  },
  {
    path: 'affectCare/:carID',
    component: AffectCarToRideComponent
  },
  {
    path: 'leaflet',
    component: LeafletComponent
  }, {
    path: 'acceuil',
    component: AcceuilComponent
  },{
    path: 'distance',
    component: FindRidesComponent
  },
  {
    path: 'stepper',
    component: StepperComponent
  },
  {
    path: 'route',
    component: InformationComponent
  },
  {
    path: 'role',
    component: ContactComponent
  },
  {
    path: 'date',
    component: SecurityComponent
  },
  {
    path: 'cost',
    component: DisplayCarddComponent
  },
  {
    path: 'finish',
    component: FinishComponent
  },{
    path: 'first',
    component: FirstAddComponent
  },
  {
    path: 'search',
    component: SearchRidesComponent
  },

  //sysy
  {path:'product',component:ProductComponent},
  {path:'productcategory',component:ProductCategoryComponent},
  {path:'category-list',component:CategoryListComponent},
  {path:'register-category-product', component:RegisterCategoryProductComponent},
  {path:'edit-category-product/:idCategory',component:EditCategoryComponent},
  {path:'subcategory-list',component:SubcategoryListComponent},
    {path:'register-subcategory', component:RegisterSubcategoryComponent},
  {path:'edit-subcategory-product/:idSubCategory',component:EditSubcategoryComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'register-product',component: RegisterProductComponent},
  {path:'edit-product/:idProduct',component:EditProductComponent},
   {path:'addcattosub/:idCategory/subcategories',component:AddSubToCatComponent},
  {path:'addprodtosubcat/:idProduct/products',component:AddprodtosubcatComponent},

  // {path:'addcattosub/:idCategory/subcategories/:idSubCategory',component:AddSubToCatComponent},
  {path:'products',component:ProductsComponent},
  {path:'rating',component:RatingComponent},
  {path:'upload',component:PictureproductComponent},
  {path:'listfavorite',component:FavoriteProductComponent},
  {path:'addpicturetoproduct',component:AddpicturetoproductComponent},
  {path:'addpicturetoproductfront',component:AddpicturetoproductfrontComponent},
  {path:'addproductfront',component:AddproductfrontComponent},

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
  {path: 'map', component: MapComponent},
  


  //hdayla
  {path:'room',component:RoomComponent,canActivate: [AuthGuard]},
  {path:'accommodation',component:AccommodationComponent,canActivate: [AuthGuard]},

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

 
 { path: 'access-denied', component: AccessDeniedComponent },
 








  


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
