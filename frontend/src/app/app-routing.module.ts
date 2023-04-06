import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "signin", component: SigninComponent},
  {path: "admin", component: AdminComponent},
  {path: "home", component:HomeComponent},
  {path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
