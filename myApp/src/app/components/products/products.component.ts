import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { map, take } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  users:any[] = [];
  isUserSelected: boolean = false;
  CurrentUserSelected: any;
  
  constructor(private apiService: ApiService , private usersService: UsersService) {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.apiService.fetchData().pipe(
      map((response: string | any[])=>response.slice(0,10))
    ).subscribe((data: any)=>{
      this.users = data;
      console.log(this.users);
    })
  }

  userSelected(user:any) {
    this.isUserSelected = true;
    this.CurrentUserSelected = user;
  }

  AddUserToAllows() {
    this.usersService.addToUserAllowed(this.CurrentUserSelected);
  }
}
