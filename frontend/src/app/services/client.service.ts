import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjectInfo } from 'src/models/objeinfo';

@Injectable({
  providedIn: 'root'
})

export class ClientService {
  uri = 'http://localhost:4000';
  constructor(private httpClient: HttpClient)
  {  }

  
  addNewOjbect(obj:ObjectInfo, username:String)
  {
    
    let data=
    {
      obj:obj,
      username:username
    }
    alert(JSON.stringify(data.obj))
    return this.httpClient.post(`${this.uri}/client/addNewOjbect`, data);
  }

}