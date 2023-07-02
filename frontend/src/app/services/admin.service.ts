import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { RegReq } from 'src/models/regreq';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  // login(username:string, password:string){
  //   const data = {
  //     username:username,
  //     password:password
  //   }
  //   return this.http.post(`${this.uri}/users/login`, data);
  // }
  getAllRegReqs()
  {
    const data = {

    }
    return this.http.post(`${this.uri}/admin/getAllRegistrationRequests`,data)
  }
  changeAccStatus(req:RegReq, status:string)
  {
    const data = {
      req:req,
      status:status
    }
    return this.http.post(`${this.uri}/admin/changeAccStatus`,data)
  }

}
