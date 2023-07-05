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
  searchName:string;
  searchAddress:string;

  searchAgencies(){
    if((typeof this.searchName === 'undefined'|| this.searchName == "") && (typeof this.searchAddress === 'undefined' || this.searchAddress==""))  //no search terms added -> get all the agencies
    {
      this.userServ.getAgencies().subscribe((data)=>{
        if(data!=null)
        {
          this.agencies = data;
        }
      })
    }   
    else if(typeof this.searchName !== 'undefined' && this.searchName != "" && (typeof this.searchAddress === 'undefined' || this.searchAddress == "")) //only name was entered -> search by name
    {
      this.userServ.getAgenciesByName(this.searchName).subscribe((data)=>{
        if(data!=null)
        {
          this.agencies = data;
        }
      })
    }
    else if((typeof this.searchName === 'undefined' || this.searchName == "") && typeof this.searchAddress !== 'undefined' && this.searchAddress != "") //only address was entered -> search by address
    {
      this.userServ.getAgenciesByAddress(this.searchAddress).subscribe((data)=>{
        if(data!=null)
        {
          this.agencies = data;
        }
      })
    }
    else //both name and address were entered -> search by both
    {
      this.userServ.getAgenciesByNameAndAddress(this.searchName, this.searchAddress).subscribe((data)=>{
        if(data!=null)
        {
          this.agencies = data;
        }
      })
    }
  }
}
