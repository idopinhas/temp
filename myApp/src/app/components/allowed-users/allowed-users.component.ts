import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-allowed-users',
  templateUrl: './allowed-users.component.html',
  styleUrl: './allowed-users.component.scss'
})
export class AllowedUsersComponent {
  allowedUsers:any;

  constructor(private usersService:UsersService) {
    this.usersService.allowedUsersSubject.asObservable().subscribe((data)=>{
      this.allowedUsers = data;
    })
  }
}
