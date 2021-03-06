import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from './interfaces/userDetails';
import { UserModify } from './interfaces/userModify';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http: HttpClient;
  baseUrl: string;

  constructor(http: HttpClient) {
    this.http = http;
    this.baseUrl = 'http://localhost:8080/user/';
  }

  findAllUsers(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>(this.baseUrl + 'getAllUsers');
  }

  addUser(user: UserModify): Observable<UserModify> {
    return this.http.post<UserModify>(this.baseUrl + 'addUser', user);
  }

  edituser(user: UserDetails): Observable<UserDetails> {
    return this.http.put<UserDetails>(this.baseUrl + 'editUser', user);
  }

  delUser(userId: Number): Observable<any> {
    const identifier = '/:id=' + userId;
    return this.http.delete<any>(this.baseUrl + 'delUser' + identifier, {observe: 'response'});
  }
}
