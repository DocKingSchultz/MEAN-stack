import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  '../utils/util'
import { uri } from '../utils/util';
import { User } from 'src/models/user';
import { ObjectInfo } from 'src/models/objeinfo';

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

  regitration(req:User)
  {
    return this.httpClient.post(`${this.uri}/users/makeRegistrationRequest`, req);
  }

  updateProfileInfo(user:User)
  {
    return this.httpClient.post(`${this.uri}/users/updateProfile`, user);
  }

  addNewOjbect(obj:ObjectInfo)
  {
    return this.httpClient.post(`${this.uri}/users/updateProfile`, obj);
  }

  getAgencies()
  {
    return this.httpClient.get<User[]>(`${this.uri}/users/getAgencies`);
  }


  getAgencyByUsername(username:string)
  {
    const data = {
      username:username
    }
    return this.httpClient.post<User>(`${this.uri}/users/getAgencyByUsername`, data);
  }
}
