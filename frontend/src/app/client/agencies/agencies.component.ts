import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent {
  constructor(private userServ: UserServiceService, private ruter: Router) { }

  ngOnInit(): void {
    this.userServ.getAgencies().subscribe((data)=>{
      if(data!=null)
      {
        this.agencies = data;
      }

      // alert(mess['message'])
    })
  }

  agencies:User[] = [];
  //selectedAgency:string; //username


  // goToAgency(agencyUsername:string){
  //     this.ruter.navigate(['/agency-description/:'+agencyUsername]);
  // }
}
