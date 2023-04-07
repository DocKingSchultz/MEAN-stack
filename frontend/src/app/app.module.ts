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
import {MatTabsModule} from '@angular/material/tabs'
import { RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { FormComponent } from './form/form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


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
    MatTabsModule,
    RouterModule,
    TableModule,
    UtilitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
