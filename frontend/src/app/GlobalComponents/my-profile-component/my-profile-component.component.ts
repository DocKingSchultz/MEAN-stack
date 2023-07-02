import { Component } from '@angular/core';
import { User } from 'src/models/user';
import { UserServiceService } from '../../services/user-service.service';
import { RoundedDirective } from '@coreui/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile-component',
  templateUrl: './my-profile-component.component.html',
  styleUrls: ['./my-profile-component.component.css']
})
export class MyProfileComponentComponent {

  constructor(private userv:UserServiceService, private ruter:Router)
  {
  }
  ngOnInit():void
  {
    var user = localStorage.getItem("user");
    if(user!=null)
    {
      this.user=JSON.parse(user)
    }
    alert(JSON.stringify(user))
  }


  user:User;
  
}
