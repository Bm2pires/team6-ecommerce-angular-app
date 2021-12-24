import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string = '';
  title:string='';
  firstName:string='';
  lastName:string='';
  dob:string='';
  contactNo:string='';
  password: string = '';
  address:string='';
  constructor() {}
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    // code to execute after form is submitted
    console.log('Submitted');
    console.log(form);

    this.email = form.value.email;
    this.title=form.value.title;
    this.firstName = form.value.firstName;
    this.lastName = form.value.lastName;
    this.dob = form.value.dob;
    this.contactNo=form.value.contactNo;
    this.password = form.value.password;
    this.address=form.value.address;

    console.log(this.email);
    // console.log(this.title);
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.dob);
    console.log(this.contactNo);
    console.log(this.password);
    console.log(this.address);
  }}
