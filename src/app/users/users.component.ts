import { UserService } from '../service/user.service';
import { User } from '../model/user.model';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  usersSub : Subscription = new Subscription();

  users : User[] | any ;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.usersSub = this.userService.getUsers().subscribe({
      next: (response) => { this.users=response; },
      error: (error) => { console.log(error); }
    });
  }

  ngOnDestroy(): void {
    this.usersSub.unsubscribe();
  }

}
