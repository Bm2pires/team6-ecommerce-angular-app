import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './loginUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL = 'http://localhost:8080/registration';

  constructor(private http: HttpClient) {}

  public registerUser(user:User):Observable<any>{
    return this.http.post<any>(this.baseURL,user);
  }

 }