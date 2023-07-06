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
  sortDirection:string;

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

  sortAgencies(){
    if(this.sortDirection == 'asc')
    {
      this.agencies.sort(this.sortAsc);
    }
    else if(this.sortDirection == 'desc') //desc
    {
      this.agencies.sort(this.sortDesc);
    }
  }

  sortDesc( a:User, b:User ) 
  {
    //first sort by name
    if ( a.name.toLowerCase() < b.name.toLowerCase() )
    {
      return 1;
    }
    if ( a.name.toLowerCase() > b.name.toLowerCase())
    {
      return -1;
    }
    else
    {
      //second sort by address
      if ( a.address.toLowerCase() < b.address.toLowerCase() ){
        return 1;
      }
      if ( a.address.toLowerCase() > b.address.toLowerCase() ){
        return -1;
      }
      return 0;
    }
  }

  sortAsc( a:User, b:User ) 
  {
    //first sort by name
    if ( a.name.toLowerCase() < b.name.toLowerCase() )
    {
      return -1;
    }
    if ( a.name.toLowerCase() > b.name.toLowerCase())
    {
      return 1;
    }
    else
    {
      //second sort by address
      if ( a.address.toLowerCase() < b.address.toLowerCase() ){
        return -1;
      }
      if ( a.address.toLowerCase() > b.address.toLowerCase() ){
        return 1;
      }
      return 0;
    }
  }

  

  // const valueA = a[property].toLowerCase();
  // const valueB = b[property].toLowerCase();

  // if (valueA < valueB) {
  //   return direction === 'asc' ? -1 : 1;
  // } else if (valueA > valueB) {
  //   return direction === 'asc' ? 1 : -1;
  // } else {
  //   // If values are equal, compare by the other property
  //   const otherProperty = property === 'name' ? 'address' : 'name';
  //   const otherValueA = a[otherProperty].toLowerCase();
  //   const otherValueB = b[otherProperty].toLowerCase();

  //   if (otherValueA < otherValueB) {
  //     return direction === 'asc' ? -1 : 1;
  //   } else if (otherValueA > otherValueB) {
  //     return direction === 'asc' ? 1 : -1;
  //   } else {
  //     return 0;
  //   }
  // }
  
   
}
