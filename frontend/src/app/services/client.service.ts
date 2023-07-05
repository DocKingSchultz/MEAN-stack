import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjectInfo } from 'src/models/objeinfo';
import { Job } from 'src/models/job';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  constructor(private httpClient: HttpClient)
  {  }
  uri = 'http://localhost:4000';
  
  addNewOjbect(obj:ObjectInfo, username:String)
  {
    
    let data=
    {
      obj:obj,
      username:username
    }
    return this.httpClient.post(`${this.uri}/client/addNewOjbect`, data);
  }
  getAllObjects(username:string)
  {
    let data=
    {
      username:username
    }
    return this.httpClient.post(`${this.uri}/client/getAllObjects`,data)
  }
  insertJob(newJob: Job, username: string) {
    let data=
    {
      job:newJob,
      username:username
    }
    return this.httpClient.post(`${this.uri}/client/insertJob`, data);
  }

}