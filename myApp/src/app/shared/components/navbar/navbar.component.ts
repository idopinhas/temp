import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  counter: number = 0;
  constructor(private usersService: UsersService) {
    this.usersService.allowedUsersSubject.asObservable().subscribe((data)=>{
      this.counter = data.length;
    })
  }
}
