import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public addUsers(newUser: {
    email: string;
    title: string;
    firstname: string;
    lastname: string;
    dob: string;
    contactNo: string;
    password: string;
    address: string;
  }) {
    this.http
      .post(`${this.baseURL}/register`, newUser)
      .subscribe((response) => {
        console.log(response);
      });
  }

 }