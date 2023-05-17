import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { ContainerComponent, FooterModule, NavItemComponent, DropdownComponent, TableModule, UtilitiesModule } from '@coreui/angular'
import { HeaderModule } from '@coreui/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { FormComponent } from './form/form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RegisterComponent } from './register/register.component';
import { UserInfoNavBarComponent } from './user-info-nav-bar/user-info-nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { ClientComponent } from './client/client.component';
import { AgencyComponent } from './agency/agency.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { FormsModule } from '@angular/forms';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    SigninComponent,
    AdminComponent,
    DataTableComponent,
    FormComponent,
    ChangePasswordComponent,
    RegisterComponent,
    UserInfoNavBarComponent,
    ProfileComponent,
    LogoutComponent,
    UploadFilesComponent,
    ClientComponent,
    AgencyComponent,
    AdminSignInComponent,
    FileUploadComponent,
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
