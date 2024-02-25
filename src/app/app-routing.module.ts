import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFrontComponent } from './frontOffice/home-front/home-front.component';
import { HomeBackComponent } from './backOffice/home-back/home-back.component';

const routes: Routes = [
{path: 'user', component:HomeFrontComponent},
{path: 'admin', component:HomeBackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
