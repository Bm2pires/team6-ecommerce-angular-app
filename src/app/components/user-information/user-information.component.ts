import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserDetails } from 'src/app/services/interfaces/userDetails';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css'],
})
export class UserInformationComponent implements OnInit {
  @ViewChild('editUserInfo')
  yourForm!: NgForm;


  confirmPass:String;

  errors: Array<string> = [];
  valid = true;

  userDetailDB!: UserDetails;

    newUserDetails: UserDetails = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      title: '',
      dateOfBirth: new Date().toLocaleDateString(),
      phoneNumber: '',
      address: ''
    };

    oldUserDetails: UserDetails = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      title: '',
      dateOfBirth: new Date().toLocaleDateString(),
      phoneNumber: '',
      address: ''
    };


    disabledFields = true;

    titles = ['Mr', 'Mrs',
    'Miss', 'Ms'];

    submitted = false;



  constructor(private datePipe: DatePipe, private userService: UserService) {

  }

  ngOnInit(): void {
    const arr1 = JSON.parse(sessionStorage.getItem("user")!)
    this.newUserDetails = arr1;
    this.newUserDetails.phoneNumber = arr1.phone_number;
    this.newUserDetails.dateOfBirth = this.datePipe.transform(arr1.dateOfBirth,"yyyy-MM-dd");
    this.confirmPass = this.newUserDetails.password;
  }

  disableFunc() {
    this.disabledFields = false;

    this.oldUserDetails.email = this.newUserDetails.email;
    this.oldUserDetails.title = this.newUserDetails.title;
    this.oldUserDetails.firstName = this.newUserDetails.firstName;
    this.oldUserDetails.lastName = this.newUserDetails.lastName;
    this.oldUserDetails.phoneNumber = this.newUserDetails.phoneNumber;
    this.oldUserDetails.address = this.newUserDetails.address;
    this.oldUserDetails.password = this.newUserDetails.password


  }

  reset() {
    this.disabledFields = true;

    this.ngOnInit();

    this.oldUserDetails.email = '';
    this.oldUserDetails.title = '';
    this.oldUserDetails.firstName = '';
    this.oldUserDetails.lastName = '';
    this.oldUserDetails.phoneNumber = '';
    this.oldUserDetails.address = '';
    this.oldUserDetails.password = '';





  }

  onSubmit() {
    this.submitted = true;
    this.validate();
      if(this.valid){
        this.userService.edituser(this.newUserDetails).subscribe(data => {
          const x = JSON.parse(sessionStorage.getItem("user")!)
          x.email = data.email;
          x.title = data.title;
          x.firstName = data.firstName;
          x.lastName = data.lastName;
          x.phone_number = data.phoneNumber;
          x.address = data.address;
          x.password = data.password;
          sessionStorage.setItem("user", JSON.stringify(x));
          this.confirmPass = "";
        });
        this.disabledFields = true;

        setTimeout(() => {
          this.ngOnInit();
          console.log("timeout")
        }, 1500)


    }else{
      alert(this.errors)
      this.errors = [];
    }
  }

  validate() {
    console.log(this.newUserDetails.password)
    console.log(this.confirmPass)
    const phoneNumberCheck = Number(this.newUserDetails.phoneNumber);
    if (Number.isNaN(phoneNumberCheck)) {
      this.errors.push('Phone number must be digitis');
    }
    if (this.newUserDetails.phoneNumber.length != 10) {
      this.errors.push('Phone number must be 10 digitis');
    }
    const emailCheck = Array.from(this.newUserDetails.email);
    let emailValid = false;
    emailCheck.forEach((letter) => {
      if (letter === '@') {
        emailValid = true;
      }
    });
    if (!emailValid) {
      this.errors.push('Email must contain an @');
    }

    if(this.newUserDetails.password != this.confirmPass || this.confirmPass === ""){
      this.errors.push("Passwords do not match")

    }

    if(this.newUserDetails.address === "" || this.newUserDetails.email === "" || this.newUserDetails.firstName === "" || this.newUserDetails.lastName === "" || this.newUserDetails.password === "" || this.newUserDetails.phoneNumber === ""){
      this.errors.push("Please fill in all fields")
    }

    if(this.errors.length != 0){
      this.valid = false;
    } else {
      this.valid = true;
    }
  }
}
