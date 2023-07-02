import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './GlobalComponents/footer/footer.component';
import { HomeComponent } from './GlobalComponents/home/home.component';
import { HeaderComponent } from './GlobalComponents/header/header.component';
import { SigninComponent } from './GlobalComponents/signin/signin.component';
import { AdminComponent } from './AdminComponents/admin/admin.component';
import { ContainerComponent, FooterModule, NavItemComponent, DropdownComponent, TableModule, UtilitiesModule } from '@coreui/angular'
import { HeaderModule } from '@coreui/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DataTableComponent } from './TemplateComponents/data-table/data-table.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RegisterComponent } from './GlobalComponents/register/register.component';
import { LogoutComponent } from './GlobalComponents/logout/logout.component';
import { UploadFilesComponent } from './TemplateComponents/upload-files/upload-files.component';
import { ClientComponent } from './client/client.component';
import { AgencyComponent } from './agency/agency.component';
import { AdminSignInComponent } from './AdminComponents/admin/admin-sign-in/admin-sign-in.component';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AdminRegReqComponent } from './AdminComponents/admin/admin-reg-req/admin-reg-req.component';
import { ChooseRegistrationPageComponent } from './GlobalComponents/choose-registration-page/choose-registration-page.component';
import { ClientRegistrationComponent } from './GlobalComponents/client-registration/client-registration.component';
import { AgnecyRegistrationComponent } from './GlobalComponents/agnecy-registration/agnecy-registration.component';
import { MyProfileComponentComponent } from './GlobalComponents/my-profile-component/my-profile-component.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    SigninComponent,
    AdminComponent,
    DataTableComponent,
    ChangePasswordComponent,
    RegisterComponent,
    LogoutComponent,
    UploadFilesComponent,
    ClientComponent,
    AgencyComponent,
    AdminSignInComponent,
    AdminRegReqComponent,
    ChooseRegistrationPageComponent,
    ClientRegistrationComponent,
    AgnecyRegistrationComponent,
    MyProfileComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    HeaderModule,
    ContainerComponent,
    NavItemComponent,
    DropdownComponent,
    HttpClientModule,
    RouterModule,
    TableModule,
    UtilitiesModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
