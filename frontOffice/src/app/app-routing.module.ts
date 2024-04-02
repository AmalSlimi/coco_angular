import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFrontComponent } from './frontOffice/home-front/home-front.component';
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


const routes: Routes = [
  {path:'',component:HomeFrontComponent},

  //amal
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




  //hdayla
  {path:'room',component:RoomComponent},
  {path:'accommodation',component:AccommodationComponent},
  {path:'cat',component:CategoryComponent},
  {path:'subcat',component:SubCategoryComponent},

 //front











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
