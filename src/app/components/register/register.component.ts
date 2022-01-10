import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../../services/user';
import { UsersService } from '../../services/users.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  date=new Date();
  todaysDate= formatDate(this.date, 'yyyy-MM-dd', 'en-US');
 
  users:any = [];
  service: UsersService;

 constructor(service: UsersService){
  this.service = service;
 }

 onAddUsers(form: NgForm){
    const newUser: User={
      email: form.value.email,
    
      title: form.value.title,
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      dob: form.value.dob,
      contactNo: form.value.contactNo,
      password: form.value.password,
      address: form.value.address
    };
    form.reset();
    this.service.addNewUsers(newUser).subscribe((response) =>{
      console.log(response);
    });
   
  }
}
