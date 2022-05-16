import { User } from './../model/user.model';
import { serverCustomerConfig } from './../config/server';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


const {url,port,path} = serverCustomerConfig;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[]= [
    {username:"james",email:"james@email.com", password:"123"}
  ];
  userSub = new Subject<User[]>();

  constructor(private httpClient : HttpClient) { }

  emitUsers(){
    this.userSub.next(this.users.slice());
  }

  addUser(user:User) {
    this.httpClient.post<User>(`http://${url}:${port}/${path}/add`, user).subscribe({
      next: (user) => {
        this.users.push(user);
        this.emitUsers();
      },
      error : (error)=> {
        console.log(error);
      }
    });
  }

  getUsers() {
    this.httpClient.get<User[]>(`http://${url}:${port}/${path}/list`).subscribe({
      next: (users) => {
        this.users = users;
        this.emitUsers();
      },
      error: (error) => {
        console.log(error);
      }

    });
  }

  removeUser(email: String) {
    this.httpClient.delete(`http://${url}:${port}/${path}/delete/${email}`).subscribe({
      next: () => {
        this.users = this.users.filter((userToFind)=>userToFind.email !== email );
        this.emitUsers();
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
}
