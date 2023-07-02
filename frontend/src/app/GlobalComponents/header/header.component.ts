import { Component, OnDestroy } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ContainerComponent } from '@coreui/angular';
import { Subscription } from 'rxjs';
import { CommonServiceService } from '../../services/common-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy{

  constructor(public router:Router, private cserv:CommonServiceService)
  {
    
    this.userType="guest"
    var user = localStorage.getItem("user");
    if(user!=null)
    {
      this.userType=JSON.parse(user).type
    }
    this.userTypeSubscription=this.cserv.getUpdate().subscribe
    (type=>{
      this.userType = type.text
    })
  }
  private userTypeSubscription:Subscription;

  userType='guest';

  logout()
  {
    localStorage.removeItem('user');
    localStorage.clear();
  }
  
  ngOnDestroy() { 
    this.userTypeSubscription.unsubscribe();
}
}
