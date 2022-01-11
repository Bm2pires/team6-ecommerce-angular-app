import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/services/loginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginService: LoginService;
  email: string = '';
  password: string = '';

  constructor(service: LoginService) {
    console.log('Login Component Loaded');
    this.loginService = service;
  }

  onSubmit(form: NgForm) {
    // code to execute after form is submitted
    console.log('Submitted');
    // console.log(form);

    this.email = form.value.email;
    this.password = form.value.password;

    const user: User = { email: this.email, password: this.password };

    console.log(user);
    this.loginService.getUserFromDB(user).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    );

    // console.log(this.email);
    // console.log(this.password);
  }
}
