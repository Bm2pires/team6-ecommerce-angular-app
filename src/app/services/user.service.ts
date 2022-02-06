import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from './userDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient;
  baseUrl: string;

  constructor(http: HttpClient) {
    this.http = http;
    this.baseUrl = 'http://localhost:8081/user/getAllUsers';
   }

   findAllUsers(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>(this.baseUrl);
  }
}
