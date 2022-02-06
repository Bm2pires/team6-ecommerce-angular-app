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
  retrievedUser: User = {
    email: '',
    password: '',
    title: '',
    firstName: '',
    lastName: '',
    phone_number: '',
    address: '',
    isAdmin: false,
  };

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  authenticate(user: LoginUser): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  // authenticate(user: LoginUser): Observable<User> {
  //   return this.http.post<User>(this.baseUrl, user);
  // }

  // // needs to retreive users from DB and check them
  // authenticate(user: LoginUser) {
  //   // getUserFromDB retrieves the user from the DB
  //   this.getUserFromDB(user).subscribe(
  //     (response) => {
  //       this.retrievedUser = <User>response;
  //       if (
  //         user.email === this.retrievedUser.email &&
  //         user.password === this.retrievedUser.password
  //       ) {
  //         sessionStorage.setItem('username', user.email);
  //         console.log('Logged In');
  //       } else {
  //         console.log('Login Failed');
  //       }
  //     },
  //     (err) => console.log(err)
  //   );
  // }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user == null));
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('username');
  }
}
