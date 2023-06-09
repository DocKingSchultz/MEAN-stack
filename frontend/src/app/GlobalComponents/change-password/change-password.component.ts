import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
declare function checkPasswordMatching(pass:string, confpass:string):boolean;
declare function checkIfAllFieldsAreFilled(formName:string):boolean;
declare function checkPasswordRegularity(formName:string):boolean;
//declare function checkPasswordEqality(oldpass:string, typedpass:string):boolean; -> doesn't exist
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {


  constructor(private servisKorisnik: UserServiceService, private ruter: Router) { }


  ngOnInit(): void {
  }
  oldPass:string="";
  newPass:string="";
  newPassConfirmed:string="";

  changePassword(){
    let user = localStorage.getItem('user');
    var userJson;
    if(user!=null)userJson = JSON.parse(user);
    if(checkIfAllFieldsAreFilled("changePassForm")&&
       checkPasswordMatching(this.newPass, this.newPassConfirmed)&&
       checkPasswordRegularity(this.newPass)&&
       checkPasswordMatching(this.oldPass,userJson.password)){

        this.servisKorisnik.changePassword(userJson.username, this.newPass).subscribe((data: any)=>{
          if(data)
          {
            localStorage.removeItem('user');
            localStorage.clear();
            alert("Lozinka je uspesno promenjena")
            this.ruter.navigate(["/logout"])
          }
          else alert("Doslo je do greske pri pokusaju menjanja lozinke")
        })
      }
    }
}
