import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './loginUser';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http: HttpClient;
  baseUrl: string = 'http://localhost:3000';
  private retrievedUser: User = { email: '', password: '' };

  constructor(http: HttpClient) {
    this.http = http;
  }

  getUserFromDB(user: User) {
    // console.log(user);
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  // needs to retreive users from DB and check them
  authenticate(user: User) {
    // getUserFromDB retrieves the user from the DB
    this.getUserFromDB(user).subscribe(
      (response) => {
        this.retrievedUser = <User>response;
        if (
          user.email === this.retrievedUser.email &&
          user.password === this.retrievedUser.password
        ) {
          sessionStorage.setItem('username', user.email);
          console.log('Logged In');
        } else {
          console.log('Login Failed');
        }
      },
      (err) => console.log(err)
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user == null));
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('username');
  }
}
