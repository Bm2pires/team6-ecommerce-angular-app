import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './loginUser';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http: HttpClient;
  baseUrl: string = 'http://localhost:3000';

  constructor(http: HttpClient) {
    this.http = http;
  }

  getUserFromDB(user: User) {
    // console.log(user);
    return this.http.post(`${this.baseUrl}/login`, user);
  }
}
