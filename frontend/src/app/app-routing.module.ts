import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "dataTable", component: DataTableComponent},
  {path: "signin", component: SigninComponent},
  {path: "home", component:HomeComponent},
  {path:"form", component:FormComponent},
  {path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
