import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/services/userDetails';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  // emailOld: string = "old";
  // titleOld: string = "akjahskd"
  // firstnameOld: string = "akjahskd"
  // lastnameOld:string  = "akjahskd"
  // dateofbirthOld: Date = new Date
  // addressOld:string = "akjahskd"
  // passwordOld:string = "akjahskd"
  // phoneNumberOld:string = "1234567899"



  // currUserDetails: UserDetails = { firstName: this.firstnameOld,
  //   lastName: this.lastnameOld,
  //   email: this.emailOld,
  //   password: this.passwordOld,
  //   title: this.titleOld,
  //   dob: this.dateofbirthOld,
  //   phoneNumber: this.phoneNumberOld,
  //   address: this.addressOld
  // };

    emailNew: string = "Current";
    titleNew: string = "Current"
    firstnameNew: string = "Current"
    lastnameNew:string  = "Current"
    dateofbirthNew: Date = new Date
    contactnumberNew: string = "Current"
    addressNew:string = "Current"
    passwordNew:string = "Current"
    phoneNumberNew:string = "Current"

    newUserDetails: UserDetails = { firstName: this.firstnameNew,
      lastName: this.lastnameNew,
      email: this.emailNew,
      password: this.passwordNew,
      title: this.titleNew,
      dob: this.dateofbirthNew,
      phoneNumber: this.phoneNumberNew,
      address: this.addressNew
    };

    oldUserDetails: UserDetails = { firstName: '',
      lastName: '',
      email: '',
      password: '',
      title: '',
      dob: new Date,
      phoneNumber: '',
      address: ''
    };


    disabledFields = true;

    titles = ['Mr', 'Mrs',
    'Miss', 'Ms'];

    submitted = false;



  constructor() { }

  ngOnInit(): void {
  }

   disableFunc() {
    this.disabledFields = false;


    // this.emailOld = this.emailNew;
    // this.titleOld = this.titleNew;
    // this.firstnameOld = this.firstnameNew;
    // this.lastnameOld = this.lastnameNew;
    // this.dateofbirthOld = this.dateofbirthNew
    // this.contactnumberOld = this.contactnumberNew;
    // this.addressOld = this.addressNew;

    this.oldUserDetails.email = this.newUserDetails.email;
    this.oldUserDetails.title = this.newUserDetails.title;
    this.oldUserDetails.firstName = this.newUserDetails.firstName;
    this.oldUserDetails.lastName = this.newUserDetails.lastName;
    this.oldUserDetails.dob = this.newUserDetails.dob
    this.oldUserDetails.phoneNumber = this.newUserDetails.phoneNumber;
    this.oldUserDetails.address = this.newUserDetails.address;
  }

  reset() {
    this.disabledFields = true;


    this.newUserDetails.email = this.oldUserDetails.email;
    this.newUserDetails.title =this.oldUserDetails.title;
    this.newUserDetails.firstName=this.oldUserDetails.firstName;
    this.newUserDetails.lastName=this.oldUserDetails.lastName;
    this.newUserDetails.dob=this.oldUserDetails.dob;
    this.newUserDetails.phoneNumber=this.oldUserDetails.phoneNumber;
    this.newUserDetails.address=this.oldUserDetails.address;

    this.oldUserDetails.email = '';
    this.oldUserDetails.title = '';
    this.oldUserDetails.firstName = '';
    this.oldUserDetails.lastName = '';
    this.oldUserDetails.dob = new Date;
    this.oldUserDetails.phoneNumber = '';
    this.oldUserDetails.address = '';

    // this.emailNew = this.emailOld;
    // this.titleNew = this.titleOld;
    // this.firstnameNew = this.firstnameOld;
    // this.lastnameNew = this.lastnameOld;
    // this.dateofbirthNew = this.dateofbirthOld
    // this.contactnumberNew = this.contactnumberOld;
    // this.addressNew = this.addressOld;



    // this.emailOld = '';
    // this.titleOld = '';
    // this.firstnameOld = '';
    // this.lastnameOld = '';
    // this.dateofbirthOld = new Date
    // this.contactnumberOld = '';
    // this.addressOld = '';

    // this.currUserDetails.email = '';
    // this.currUserDetails.title = '';
    // this.currUserDetails.firstName = '';
    // this.currUserDetails.lastName = '';
    // this.currUserDetails.dob = new Date;
    // this.currUserDetails.phoneNumber = '';
    // this.currUserDetails.address = '';
  }

  onSubmit() {
    this.disabledFields = true;

    this.oldUserDetails.email = '';
    this.oldUserDetails.title = '';
    this.oldUserDetails.firstName = '';
    this.oldUserDetails.lastName = '';
    this.oldUserDetails.dob = new Date;
    this.oldUserDetails.phoneNumber = '';
    this.oldUserDetails.address = '';

    // this.emailOld = '';
    // this.titleOld = '';
    // this.firstnameOld = '';
    // this.lastnameOld = '';
    // this.dateofbirthOld = new Date,
    // this.contactnumberOld = '';
    // this.addressOld = '';

    // this.currUserDetails.email = '';
    // this.currUserDetails.title = '';
    // this.currUserDetails.firstName = '';
    // this.currUserDetails.lastName = '';
    // this.currUserDetails.dob = new Date;
    // this.currUserDetails.phoneNumber = '';
    // this.currUserDetails.address = '';

    //Need to update backend


  }

  checkInput(input: { valid: any; }){
    if(input.valid){
      return false;
    }else {
      return true
    }
  }

}
