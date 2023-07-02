import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { RegReq } from 'src/models/regreq';

declare function checkPasswordMatching(pass:string, confpass:string):boolean;
declare function checkIfAllFieldsAreFilled(formName:string):boolean;
declare function checkPasswordRegularity(password:string):boolean;

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent {
  constructor(private userServ: UserServiceService, private ruter: Router) { }

  ngOnInit(): void {
  }

  req:RegReq = new RegReq();


  registration()
  {
    this.req.type="client"
    if(checkIfAllFieldsAreFilled("registerForm")
    && checkPasswordRegularity(this.req.password)
    && checkPasswordMatching(this.req.password, this.req.passwordConfirmed)){
      this.userServ.regitration(this.req).subscribe((mess:any)=>{
        alert(mess['message'])
  })

   }

 }
}
