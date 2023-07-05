import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { CommonServiceService } from '../../services/common-service.service';

declare function checkIfAllFieldsAreFilled(pass:string):boolean;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
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
      this.usrServ.login(this.username, this.password, false).subscribe((data:any)=>{
        if(!data){
          alert("Korisnik sa unetim podacima ne postoji u sistemu, ili zahtev za registracijom nije odobren !");
        }
        else{
          if(data.type=="client"){
            localStorage.setItem("user", JSON.stringify(data))
            this.cserv.sendUpdate("client")
            this.router.navigate(['profile']);
          }
          else if(data.type=="agency"){
            localStorage.setItem("user", JSON.stringify(data))
            this.cserv.sendUpdate("agency")
            this.router.navigate(['agency']);
          }

        }
      })
    }
  }

}
