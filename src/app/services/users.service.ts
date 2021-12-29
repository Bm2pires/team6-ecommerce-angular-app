import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root' // registered at root module
})
export class UsersService {

  http: HttpClient;
  baseUrl:string = "http://localhost:3000";
  constructor(http:HttpClient) { 
     this.http = http;
  }

  //  getAllUsers(){
  //    console.log("within service")
  //    return this.http.get(`${this.baseUrl}/api/users`);
  //  }

addNewUsers(newUser: User)
{
   return this.http.post(`${this.baseUrl}/ecomdb/users`, newUser);
}
}
