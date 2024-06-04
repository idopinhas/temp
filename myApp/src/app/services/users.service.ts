import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public allowedUsersSubject: BehaviorSubject<any> = new BehaviorSubject([]);
  constructor() { }

  addToUserAllowed(selectedUser: any) {
    var tempData= this.allowedUsersSubject.getValue();
    tempData.push(selectedUser);
    this.allowedUsersSubject.next(tempData);
    console.log(this.allowedUsersSubject.getValue());
  }  
}
