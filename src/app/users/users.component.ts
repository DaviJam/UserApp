import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  usersSub : Subscription = new Subscription();

  users : User[] | any ;

  constructor(private userService : UserService, private router : Router) {

   }

  ngOnInit(): void {
    this.usersSub = this.userService.userSub.subscribe({
      next: (response) => { this.users=response; },
      error: (error) => { console.log(error); }
    });
    this.userService.getUsers();
  }

  ngOnDestroy(): void {
    this.usersSub.unsubscribe();
  }

  onDeleted(email : String){
    this.userService.removeUser(email);
  }
  onCreate(){
    this.router.navigate(["users/add"]);
  }
}
