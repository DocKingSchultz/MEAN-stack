import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { User } from 'src/models/user';

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
  changeAccStatus(req:User, status:string)
  {
    const data = {
      req:req,
      status:status
    }
    return this.http.post(`${this.uri}/admin/changeAccStatus`,data)
  }

  deleteUser(username:string)
  {
    const data = {
      username:username,
    }
    return this.http.post(`${this.uri}/users/deleteUser`, data);
  }

}
