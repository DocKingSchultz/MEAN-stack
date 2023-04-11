import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  '../utils/util'
import { uri } from '../utils/util';

@Injectable({providedIn: 'root'})
export class UserServiceService {
  
  constructor(private httpClient: HttpClient) 
  {  }
  login(username:string, password:string){
    const data = {
      username:username,
      password:password
    }
    return this.httpClient.post(`${uri}/users/login`, data);
  }
  
}