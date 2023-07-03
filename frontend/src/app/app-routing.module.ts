import { AdminSignInComponent } from './AdminComponents/admin/admin-sign-in/admin-sign-in.component';
import { UploadFilesComponent } from './TemplateComponents/upload-files/upload-files.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './GlobalComponents/home/home.component';
import { SigninComponent } from './GlobalComponents/signin/signin.component';
import { DataTableComponent } from './TemplateComponents/data-table/data-table.component';
import { ChangePasswordComponent } from './GlobalComponents/change-password/change-password.component';
import { AdminComponent } from './AdminComponents/admin/admin.component';
import { AgencyComponent } from './agency/agency.component';
import { ClientComponent } from './client/client.component';
import { AdminRegReqComponent } from './AdminComponents/admin/admin-reg-req/admin-reg-req.component';
import { ChooseRegistrationPageComponent } from './GlobalComponents/choose-registration-page/choose-registration-page.component';
import { ClientRegistrationComponent } from './GlobalComponents/client-registration/client-registration.component';
import { AgnecyRegistrationComponent } from './GlobalComponents/agnecy-registration/agnecy-registration.component';
import { MyProfileComponentComponent } from './GlobalComponents/my-profile-component/my-profile-component.component';
import { ObjectsComponent } from './client/objects/objects.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"dataTable", component: DataTableComponent},
  {path:"signin", component: SigninComponent},
  {path:"home", component:HomeComponent},
  {path:"register", component:ChooseRegistrationPageComponent},
  {path:"changePassword", component:ChangePasswordComponent},
  {path:"admin", component:AdminComponent},
  {path:"profile", component:MyProfileComponentComponent},
  {path:"uploadFiles", component:UploadFilesComponent},
  {path:"admin-sign-in", component:AdminSignInComponent},
  {path:"agency", component:AgencyComponent},
  {path:"client", component:ClientComponent},
  {path:"regreq", component:AdminRegReqComponent},
  {path:"registerClient", component:ClientRegistrationComponent},
  {path:"registerAgency", component:AgnecyRegistrationComponent},
  {path:"objects", component:ObjectsComponent},
  {path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
