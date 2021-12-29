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
  // email: string = '';
  // title:string='';
  // firstName:string='';
  // lastName:string='';
  // dob:string='';
  // contactNo:string='';
  // password: string = '';
  // address:string='';
  // constructor() {}
  // ngOnInit(): void {}

  users:any = [];
  service: UsersService;

 constructor(service: UsersService){
  this.service = service;
 }


  // onSubmit(form: NgForm) {
  //   // code to execute after form is submitted
  //   console.log('Submitted');
  //   console.log(form);

  //   this.email = form.value.email;
  //   this.title=form.value.title;
  //   this.firstName = form.value.firstName;
  //   this.lastName = form.value.lastName;
  //   this.dob = form.value.dob;
  //   this.contactNo=form.value.contactNo;
  //   this.password = form.value.password;
  //   this.address=form.value.address;

  //   console.log(this.email);
  //   // console.log(this.title);
  //   console.log(this.firstName);
  //   console.log(this.lastName);
  //   console.log(this.dob);
  //   console.log(this.contactNo);
  //   console.log(this.password);
  //   console.log(this.address);
  // }
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
    this.service.addNewUsers(newUser).subscribe((response) =>{
      console.log(response);
    });
   
  }
}
