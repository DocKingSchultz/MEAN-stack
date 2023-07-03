import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../services/user-service.service';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

declare function checkIfAllFieldsAreFilled(pass:string):boolean;

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.css']
})
export class AdminSignInComponent implements OnInit{
  ngOnInit(): void {

  }
  username: string = "";
  password: string = "";
  message: string  = "";

  constructor(private usrServ:UserServiceService, private router: Router, private cserv:CommonServiceService){ }

  login()
  {
    if(checkIfAllFieldsAreFilled("loginForm"))
    {
      this.usrServ.login(this.username, this.password, true).subscribe((data:any)=>{
        if(!data){
          alert("Administrator sa unetim podacima ne postoji u sistemu");
        }
        else{
            localStorage.setItem("user", JSON.stringify(data))
            this.cserv.sendUpdate("admin")
            this.router.navigate(['admin']);
        }
      })
    }
  }
}
