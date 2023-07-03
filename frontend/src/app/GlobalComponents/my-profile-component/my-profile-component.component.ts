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
  }


  user:User;
  selectedFile: File;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    const reader:FileReader = new FileReader();
    reader.onloadend=(e)=>{
      if(reader.result!=null)
        this.user.picture=reader.result.toString();
    }
    reader.readAsDataURL(this.selectedFile);
  }
  save()
  {
    if (this.selectedFile) {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (e: any) => {
        img.onload = () => {
          const width = img.width;
          const height = img.height;
          if (width >= 100 && width <= 300 && height >= 100 && height <= 300) {
            //alert('Image dimensions are within the range of 100px to 300px.');
            this.userv.updateProfileInfo(this.user).subscribe((info:any)=>{
              alert(info)
              {
                alert(JSON.stringify(info))
              }
            })
          }
          else {
            alert('Image dimensions are not within the range of 100px to 300px.');
          }
        };
        img.src = e.target.result; 
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

}
