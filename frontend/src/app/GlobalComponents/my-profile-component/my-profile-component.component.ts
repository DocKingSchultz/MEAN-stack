import { Component } from '@angular/core';
import { User } from 'src/models/user';
import { UserServiceService } from '../../services/user-service.service';
import { RoundedDirective } from '@coreui/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-profile-component',
  templateUrl: './my-profile-component.component.html',
  styleUrls: ['./my-profile-component.component.css']
})
export class MyProfileComponentComponent {

  constructor(private userv:UserServiceService, private ruter:Router,private route:ActivatedRoute)
  { 
    var user = localStorage.getItem("user");
    if(user!=null)
    {
      this.user=JSON.parse(user)
    }   
  }
  ngOnInit():void
  {
    this.userv.refreshUser(this.user.username).subscribe((data:any)=>{
      if(data)
      {
        localStorage.setItem("user", JSON.stringify(data))
        this.user = data;
        if(this.user.type=='admin')
        {
          const usernameParam = this.route.snapshot.paramMap.get('username');
          if (usernameParam) 
          {
            this.userv.getUserByUsername(usernameParam).subscribe((data:User)=>{
              if(data)
              {
                this.admin = this.user;
                this.user = data;
              }
            })
          }
            
        }
        else //client/agency
        {
          //this.user = data;
          //leave the user
        }
       
      }
    })
  }


  user:User;
  admin:User;
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
            //if email has changed -> check if there is alerady a user with that email!
            this.userv.getUserByEmail(this.user.email).subscribe((data:User)=>{
              if(data)
              {
                if(data.username == this.user.username) //my email didn't change
                {
                  this.userv.updateProfileInfo(this.user).subscribe((info:any)=>{
                    if(info)
                    {
                      alert("Informacije izmenjene")
                      // if(this.admin==null) //there is no admin logged in
                      // {

                      // }
                      this.userv.refreshUser(this.user.username).subscribe((data:any)=>{
                        if(data)
                        {
                          localStorage.setItem("user", JSON.stringify(data))
                          alert("Uspesno azurirani podaci")
                        }
                      })
                    }
                  })
                }
                else //my email changed, and is already used by a different user
                { 
                  alert("Email je vec koriscen od strane drugog korisnika!")
                }
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
    else
    {
      //if email has changed -> check if there is alerady a user with that email!
      this.userv.getUserByEmail(this.user.email).subscribe((data:User)=>{
        if(data)
        {
          if(data.username == this.user.username) //my email didn't change -> update my profile
          {
            this.userv.updateProfileInfo(this.user).subscribe((info:any)=>{
              if(info)
              {
                alert("Informacije izmenjene")
                this.userv.refreshUser(this.user.username).subscribe((data:any)=>{
                  if(data)
                  {
                    localStorage.setItem("user", JSON.stringify(data))
                    alert("Uspesno azurirani podaci")
                  }
                })
              }
            })
          }
          else //my email changed, and is already used by a different user
          { 
            alert("Email je vec koriscen od strane drugog korisnika!")
          }
        }
        else //no user with new email -> update my profile
        {
          this.userv.updateProfileInfo(this.user).subscribe((info:any)=>{
            if(info)
            {
              alert("Informacije izmenjene")
              this.userv.refreshUser(this.user.username).subscribe((data:any)=>{
                if(data)
                {
                  localStorage.setItem("user", JSON.stringify(data))
                  alert("Uspesno azurirani podaci")
                }
              })
            }
          })
        }
      })
    }
  }


}
