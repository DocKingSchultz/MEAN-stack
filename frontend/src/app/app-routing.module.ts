import { UploadFilesComponent } from './upload-files/upload-files.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FormComponent } from './form/form.component';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"dataTable", component: DataTableComponent},
  {path:"signin", component: SigninComponent},
  {path:"home", component:HomeComponent},
  {path:"form", component:FormComponent},
  {path:"register", component:RegisterComponent},
  {path:"changePassword", component:ChangePasswordComponent},
  {path:"admin", component:AdminComponent},
  {path:"profile", component:ProfileComponent},
  {path:"uploadFiles", component:UploadFilesComponent},
  {path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
