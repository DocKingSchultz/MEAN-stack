import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-agency-description',
  templateUrl: './agency-description.component.html',
  styleUrls: ['./agency-description.component.css']
})
export class AgencyDescriptionComponent {

  constructor(private userServ: UserServiceService, private ruter: Router, private route:ActivatedRoute) { }

  agencyUsername:string;
  agency:User;

  ngOnInit(): void {

    const usernameParam = this.route.snapshot.paramMap.get('username');
    if (usernameParam) {
      this.agencyUsername = usernameParam;
      
      this.userServ.getAgencyByUsername(this.agencyUsername).subscribe((data:User)=>{
        if(data!=null)
        {
          this.agency = data;
        }
      })
    } 
    else {
      console.log("No agency with username?")
    }

  }


}
