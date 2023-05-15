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
  username: string = "";
  password: string = "";
  message: string  = "";


  constructor(private usrServ:UserServiceService, private router: Router){ }

  login()
  {
    alert("In")
    if(checkIfAllFieldsAreFilled("loginForm"))
    {
      this.usrServ.login(this.username, this.password, false).subscribe((data:any)=>{
        if(!data){
          alert("Korisnik sa unetim podacima ne postoji u sistemu !");
        }
        else{
          if(data.type=="client"){
            alert(data)
            localStorage.setItem("user", JSON.stringify(data))
            this.router.navigate(['client']);
          }
          else if(data.type=="agency"){
            alert(data)
            localStorage.setItem("user", JSON.stringify(data))
            this.router.navigate(['agency']);
          }

        }
      })
    }
  }

}
