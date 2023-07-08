import { Component, OnDestroy } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ContainerComponent } from '@coreui/angular';
import { Subscription } from 'rxjs';
import { CommonServiceService } from '../../services/common-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/models/user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy{

  constructor(private userServ:UserServiceService,public router:Router, private cserv:CommonServiceService)
   {
    
    this.userType="guest"
    var user = localStorage.getItem("user");
    if(user!=null)
    {
      this.user = JSON.parse(user)
      this.userType=JSON.parse(user).type
    }
    this.userTypeSubscription=this.cserv.getUpdate().subscribe
    (type=>{
      this.userType = type.text
    })
  }


  private userTypeSubscription:Subscription;

  userType='guest';
  user:User;

  logout()
  {
    localStorage.removeItem('user');
    localStorage.clear();
  }
  
  ngOnDestroy() { 
    this.userTypeSubscription.unsubscribe();
}
}
