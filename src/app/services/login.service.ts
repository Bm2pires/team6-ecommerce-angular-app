import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoginUser } from './loginUser';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http: HttpClient;
  baseUrl: string = 'http://localhost:8080/user/login';

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  authenticate(user: LoginUser): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('user');
    console.log(!(user == null));
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('user');
  }
}
