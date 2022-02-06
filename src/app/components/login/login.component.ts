import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { LoginUser } from 'src/app/services/loginUser';
import { User } from 'src/app/services/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginService: LoginService;
  email: string = '';
  password: string = '';

  // Inject the login service dependency
  constructor(service: LoginService) {
    console.log('Login Component Loaded');
    this.loginService = service;
  }

  onSubmit(form: NgForm) {
    let user: User = {
      email: '',
      password: '',
      title: '',
      firstName: '',
      lastName: '',
      phone_number: '',
      address: '',
      isAdmin: false,
    };
    // code to execute after form is submitted
    // console.log('Submitted');
    // console.log(form);

    this.email = form.value.email;
    this.password = form.value.password;

    const loginUser: LoginUser = { email: this.email, password: this.password };

    this.loginService.authenticate(loginUser).subscribe((response) => {
      console.log(response);
    });

    // this.loginService.getUserFromDB(user).subscribe(
    //   (response) => console.log(response),
    //   (err) => console.log(err)
    // );

    // console.log(this.email);
    // console.log(this.password);
  }
}
