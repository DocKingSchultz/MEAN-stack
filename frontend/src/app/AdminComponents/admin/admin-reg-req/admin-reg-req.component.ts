import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user';

@Component({
  selector: 'app-admin-reg-req',
  templateUrl: './admin-reg-req.component.html',
  styleUrls: ['./admin-reg-req.component.css']
})
export class AdminRegReqComponent {
  constructor(private adminServ:AdminService, private ruter:Router, private route: ActivatedRoute)
  {

  }

  ngOnInit(): void {
    this.adminServ.getAllRegReqs().subscribe((reqs:any)=>{
      this.regReqs=reqs;
    })
  }
  regReqs : User[];

  changeAccStatus(req:User, status:string)
  {
    this.adminServ.changeAccStatus(req, status).subscribe((mss:any)=>{

    })
    const currentRoute = this.route.snapshot.routeConfig?.path;;
    this.ruter.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.ruter.navigate([currentRoute]);
    });
  }
}
