import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private userType = new Subject<any>();
  sendUpdate(type:string)
  {
    this.userType.next({text:type})
  }
  getUpdate():Observable<any>
  {
    return this.userType.asObservable();
  }
}
