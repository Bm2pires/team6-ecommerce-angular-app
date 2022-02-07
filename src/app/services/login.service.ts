import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { LoginUser } from './loginUser';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http: HttpClient;
<<<<<<< HEAD
  baseUrl: string = 'http://localhost:8081';
  private retrievedUser: User = { email: '', password: '' };
=======
  baseUrl: string = 'http://localhost:8080/user/login';
>>>>>>> e1681ae1aae682d2fc2510503832c7aefe72d5e7

  constructor(httpClient: HttpClient, private router: Router) {
    this.http = httpClient;
  }

<<<<<<< HEAD
  getUserFromDB(user: User) {
    console.log(user);
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
=======
  authenticate(user: LoginUser): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
>>>>>>> e1681ae1aae682d2fc2510503832c7aefe72d5e7
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('user');
    console.log(!(user == null));
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
