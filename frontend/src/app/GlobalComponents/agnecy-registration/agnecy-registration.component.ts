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

  selectedFile: File;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    const reader:FileReader = new FileReader();
    reader.onloadend=(e)=>{
      if(reader.result!=null)
        this.req.picture=reader.result.toString();
    }
    reader.readAsDataURL(this.selectedFile);
  }

  registration() {
    if (this.selectedFile) {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (e: any) => {
        img.onload = () => {
          const width = img.width;
          const height = img.height;
          if (width >= 100 && width <= 300 && height >= 100 && height <= 300) {
            //alert('Image dimensions are within the range of 100px to 300px.');
              this.req.type="agency"
              if(checkIfAllFieldsAreFilled("registerForm")
              && checkPasswordRegularity(this.req.password)
              && checkPasswordMatching(this.req.password, this.req.passwordConfirmed)){
                this.userServ.regitration(this.req).subscribe((mess:any)=>{
                  this.ruter.navigate(['/']);
                  alert(mess['message'])
                })
              }
          }
          else {
            alert('Image dimensions are not within the range of 100px to 300px.');
          }
        };
        img.src = e.target.result; 
      };
      reader.readAsDataURL(this.selectedFile);
    }
    else{ //default profile photo  
      this.req.picture="assets/pictures/defaultAgencyLogo.png"
      this.req.type="agency"
      if(checkIfAllFieldsAreFilled("registerForm")
      && checkPasswordRegularity(this.req.password)
      && checkPasswordMatching(this.req.password, this.req.passwordConfirmed)){
        this.userServ.regitration(this.req).subscribe((mess:any)=>{
          this.ruter.navigate(['/']);
          alert(mess['message'])
        })
      }
    }
  }

}
