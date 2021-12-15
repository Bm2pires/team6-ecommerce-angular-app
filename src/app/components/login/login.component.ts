import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    // code to execute after form is submitted
    console.log('Submitted');
    console.log(form);

    this.email = form.value.email;
    this.password = form.value.password;
    console.log(this.email);
    console.log(this.password);
  }
}
