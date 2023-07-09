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
  updateAgencyWorkers(username:string, numWorkers:number)
  {
    const data = {
      username:username,
      numWorkers:numWorkers
    }
    return this.httpClient.post(`${uri}/users/updateAgencyWorkers`, data);
  }
  login(username:string, password:string, isAdmin:boolean){
    const data = {
      username:username,
      password:password,
      isAdmin:isAdmin
    }
    return this.httpClient.post(`${uri}/users/login`, data);
  }
  getAllUsers()
  {
    return this.httpClient.post(`${uri}/users/getAllUsers`, null);
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
  updateUser(user:User)
  {
    return this.httpClient.post(`${this.uri}/users/updateProfile`, user);
  }
  getUserByUsername(username:string)
  {
    const data = {
      username:username,
    }
    return this.httpClient.post<User>(`${this.uri}/users/getUserByUsername`, data);
  }
  getUserByEmail(email:string)
  {
    const data = {
      email:email,
    }
    return this.httpClient.post<User>(`${this.uri}/users/getUserByEmail`, data);
  }

  getAgencies()
  {
    return this.httpClient.get<User[]>(`${this.uri}/users/getAgencies`);
  }
  refreshUser(username:string,){
    const data = {
      username:username,
    }
    return this.httpClient.post(`${uri}/users/refresh`, data);
  }

  getAgencyByUsername(username:string)
  {
    const data = {
      username:username
    }
    return this.httpClient.post<User>(`${this.uri}/users/getAgencyByUsername`, data);
  }
  
  getAgenciesByName(name:string)
  {
    const data = {
      name:name
    }
    return this.httpClient.post<User[]>(`${this.uri}/users/getAgenciesByName`, data);
  }

  getAgenciesByAddress(address:string)
  {
    const data = {
      address:address
    }
    return this.httpClient.post<User[]>(`${this.uri}/users/getAgenciesByAddress`, data);
  }
  
  getAgenciesByNameAndAddress(name:string, address:string)
  {
    const data = {
      name:name,
      address:address
    }
    return this.httpClient.post<User[]>(`${this.uri}/users/getAgenciesByNameAndAddress`, data);
  }
}
