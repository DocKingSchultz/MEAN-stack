import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/models/user';

declare function drawSketch(rectangles:any, confirmBool:boolean, doors:any):void

@Component({
  selector: 'app-agency-jobs',
  templateUrl: './agency-jobs.component.html',
  styleUrls: ['./agency-jobs.component.css']
})
export class AgencyJobsComponent {

  constructor(private ruter:Router, private usrServ:UserServiceService)
  {
    this.usrServ.getAllUsers().subscribe((data:any)=>{
      if(data)
      {
        this.users=data;
        this.updateJobStateVisible=false
        let user = localStorage.getItem("user")
        if (user != null) {
          this.usrServ.refreshUser(JSON.parse(user).username).subscribe((data: any) => {
            if (data) {
              this.userMe = data
            }
          })
      }
    }
      else alert("Greska pri dohvatanju svih korisnika na agency-jobs komponenti")
    })
    
    
  }
  users:User[]=[]
  userMe:User;
  updateJobStateVisible=false;
  updateUserJobIndex:number
  updateClJobIndex:number
  azuriraj(userIndex:number, jobIndex:number)
  {
    this.updateJobStateVisible=true; 
    this.updateUserJobIndex=userIndex
    this.updateClJobIndex=jobIndex
  }
  odbij(userIndex:number, jobIndex:number)
  {
    this.users[userIndex].clientJobs[jobIndex].status="rejected"
    this.usrServ.updateUser(this.users[userIndex]).subscribe((data:any)=>{
      if(data)
      {
        alert("Ponuda uspesno prosledjena")
        this.users[userIndex].clientJobs.splice(jobIndex,1)
      }
      else alert("Ponuda neuspesno prosledjena")
    })
    
  }
  posaljiPonudu(userIndex:number, jobIndex:number)
  {
    this.usrServ.updateUser(this.users[userIndex]).subscribe((data:any)=>{
      if(data)
      {
        alert("Ponuda uspesno prosledjena")
      }
      else alert("Ponuda neuspesno prosledjena")
    })
  }
  pregled(userIndex:number, jobIndex:number)
  {

      drawSketch(this.users[userIndex].clientJobs[jobIndex].object.sketch.rooms, false, this.users[userIndex].clientJobs[jobIndex].object.sketch.doors)
    
  }
  getJobColor(status:string)
  {
    if(status=="active")return "green"
    return ""
  }
}
