import { formatDate } from '@angular/common';
// import { Router } from '@angular/compiler/src/core';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/register.service';
import { User } from 'src/app/services/registerUser';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  date=new Date();
  todaysDate= formatDate(this.date, 'yyyy-MM-dd', 'en-US');

  msg='';

  user:any=[];


  constructor(private _service:UserService, private router:Router) {
    this._service = _service;
   }

  ngOnInit(): void {
  }

  registerUser(form: NgForm){
    const newUser: User={
      email: form.value.email,
      title: form.value.title,
      firstName: form.value.firstname,
      lastName: form.value.lastname,
      dob: form.value.dob,
      phone_number: form.value.contactNo,
      password: form.value.password,
      address: form.value.address,

    };
    let email=form.value.email;

    form.reset();

   this._service.registerUser(newUser).subscribe(
    data=>{
      console.log("response received");
      this.msg="Registration successful";
this.router.navigate(['/login']);

    },

    error=>{
       console.log("exception occurs");
       this.msg=email+" Email id already used";

       //this.msg=error.error;


     }

   )

  }




  }

