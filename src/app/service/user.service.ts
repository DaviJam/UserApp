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

  constructor(private httpClient : HttpClient) { }

  getUsers() : Observable<any> {
    return this.httpClient.get<any>(`http://${url}:${port}/${path}`);
  }
}
