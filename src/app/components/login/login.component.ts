import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LoginUser } from 'src/app/services/loginUser';
import { NavbarService } from 'src/app/services/navbar.service';
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
  constructor(service: LoginService, private router: Router, private navService: NavbarService) {
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

    this.email = form.value.email;
    this.password = form.value.password;

    const loginUser: LoginUser = { email: this.email, password: this.password };

    this.loginService.authenticate(loginUser).subscribe((response) => {
      user = response;
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['']);
    });

    setTimeout(() => {
      this.navService.callMethodOfSecondComponent();
    }, 100)


  }
}
