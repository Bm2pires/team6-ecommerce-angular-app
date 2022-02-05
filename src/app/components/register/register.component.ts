import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  @ViewChild('form', { static: false })
  signupForm: NgForm;
  newUser = {
    email:'',
    title: '',
    firstname: '',
    lastname: '',
    dob: '',
    contactNo: '',
    password: '',
    address:'',
  };
  date=new Date();
  todaysDate= formatDate(this.date, 'yyyy-MM-dd', 'en-US');
    constructor(private user: UserService) {}

    onSubmit() {
      this.newUser.email = this.signupForm.value.email;
      this.newUser.title = this.signupForm.value.title;
      this.newUser.firstname = this.signupForm.value.firstname;
      this.newUser.lastname = this.signupForm.value.lastname;
      this.newUser.dob = this.signupForm.value.dob;
      this.newUser.contactNo = this.signupForm.value.contactNo;
      this.newUser.password = this.signupForm.value.password;
      this.newUser.address = this.signupForm.value.address;
      this.signupForm.reset();
  
      this.user.addUsers(this.newUser);
    }
}
