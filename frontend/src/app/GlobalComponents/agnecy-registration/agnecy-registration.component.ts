import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/models/user';

declare function checkPasswordMatching(pass:string, confpass:string):boolean;
declare function checkIfAllFieldsAreFilled(formName:string):boolean;
declare function checkPasswordRegularity(password:string):boolean;

@Component({
  selector: 'app-agnecy-registration',
  templateUrl: './agnecy-registration.component.html',
  styleUrls: ['./agnecy-registration.component.css']
})
export class AgnecyRegistrationComponent {
  constructor(private userServ: UserServiceService, private ruter: Router) { }

  ngOnInit(): void {
  }

  req:User = new User();


  registration()
  {
    this.req.type="agency"
    if(checkIfAllFieldsAreFilled("registerForm")
    && checkPasswordRegularity(this.req.password)
    && checkPasswordMatching(this.req.password, this.req.passwordConfirmed)){
      this.userServ.regitration(this.req).subscribe((mess:any)=>{
        alert(mess['message'])
  })

   }

 }
}
