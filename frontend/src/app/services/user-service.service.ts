import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  '../utils/util'
import { uri } from '../utils/util';
import { RegReq } from 'src/models/regreq';

@Injectable({providedIn: 'root'})
export class UserServiceService {
  uri = 'http://localhost:4000';
  constructor(private httpClient: HttpClient)
  {  }
  login(username:string, password:string, isAdmin:boolean){
    const data = {
      username:username,
      password:password,
      isAdmin:isAdmin
    }
    return this.httpClient.post(`${uri}/users/login`, data);
  }
  changePassword(username:string, password:string)
  {
    const data = {
      username:username,
      password:password
    }
    return this.httpClient.post(`${this.uri}/users/changePassword`, data);
  }
  regitration(req:RegReq)
  {
    return this.httpClient.post(`${this.uri}/users/makeRegistrationRequest`, req);
  }

}
