import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Job } from 'src/models/job';
import { ObjectInfo } from 'src/models/objeinfo';
import { User } from 'src/models/user';

@Component({
  selector: 'app-agency-description',
  templateUrl: './agency-description.component.html',
  styleUrls: ['./agency-description.component.css']
})
export class AgencyDescriptionComponent {

  constructor(private clServ:ClientService, private userServ: UserServiceService, private ruter: Router, private route:ActivatedRoute) 
  {
    let u = localStorage.getItem("user")
    if(u!=null)
    {
      this.user=JSON.parse(u)
      this.userType = this.user.type
      if(this.user.objects.length>0)
      {
        this.selectedObject=this.user.objects[0];
      }
    }
    else
    {
      this.userType = 'guest';
    }
  }

  agencyUsername:string;
  agency:User;
  user:User;
  userType:string = 'guest';

  ngOnInit(): void {
    let u = localStorage.getItem("user")
    if(u!=null)
    {
      this.user=JSON.parse(u)
      this.userType = this.user.type
      if(this.user.objects.length>0)
      {
        this.selectedObject=this.user.objects[0];
      }
    }
    else
    {
      this.userType = 'guest';
    }
    const usernameParam = this.route.snapshot.paramMap.get('username');
    if (usernameParam) {
      this.agencyUsername = usernameParam;
      
      this.userServ.getAgencyByUsername(this.agencyUsername).subscribe((data:User)=>{
        if(data!=null)
        {
          this.agency = data;
          if(this.userType=='guest')
          {
            //depersonalize user comments
            for(let i=0 ; i<this.agency.agencyComments.length;i++)
            {
              var depersonalizedUsername = this.agency.agencyComments[i].usernameOfUser.charAt(0)
              for(let j=1; j<this.agency.agencyComments[i].usernameOfUser.length;j++) //only leave the first character shown
              {
                depersonalizedUsername = depersonalizedUsername + "*"
              }
              this.agency.agencyComments[i].usernameOfUser = depersonalizedUsername
            }
          }
        }
      })
    } 
    else {
      console.log("No agency with username?")
    }

  }

  //Just for client
  //
  arrangeJobVisible=false;
  selectedObject:ObjectInfo
  newJob = new Job();

  arrangeJob()
  {
    this.arrangeJobVisible=true;
  }
  createNewJob()
  {
    if (this.newJob.startDate && this.newJob.endDate) {
      // Get the current date
      const currentDate = new Date();
      
      // Convert the startDate and endDate strings to Date objects
      const startDate = new Date(this.newJob.startDate);
      const endDate = new Date(this.newJob.endDate);
      
      // Check if startDate is in the past
      if (startDate < currentDate || endDate < startDate || startDate>endDate) {
        // Handle the case when startDate is in the past
        alert("Datumi nisu lepo izabrani.");
        return;
      }
      
      this.newJob.object=this.selectedObject
      this.newJob.agencyUsername=this.agency.username
      this.clServ.insertJob(this.newJob, this.user.username).subscribe((data:any)=>{
          if(data)
          {
            let user = localStorage.getItem("user")
              if(user!=null){
                this.userServ.refreshUser(JSON.parse(user).username).subscribe((data: any) => {
                  if(data)
                  {
                    alert(JSON.stringify(data.clientJobs))
                    localStorage.setItem("user", JSON.stringify(data))
                  }
                })
              }
          }
          else alert("Nastao je problem prilikom kreiranja zahteva.")
      })

      
    } else {
      // Handle the case when startDate or endDate is null
      console.log("Please select both start date and end date.");
    }
    alert("Kreiranje novog posla")
  }
}
