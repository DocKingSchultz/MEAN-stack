import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

declare function checkIfAllFieldsAreFilled(pass:string):boolean;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  ngOnInit(): void {

  }
  username: string|undefined;
  password: string|undefined;
  message: string | undefined;


  constructor(private usrServ:UserServiceService, private router: Router){ }

  login()
  {
    if(checkIfAllFieldsAreFilled("loginForm"))
    {
      
    }
  }

}
