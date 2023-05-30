import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ContainerComponent } from '@coreui/angular';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public router:Router){}



}
