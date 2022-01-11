import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  username: string = "akjahskd";
  title: string = "akjahskd"
  firstname: string = "akjahskd"
  lastname:string  = "akjahskd"
  dateofbirth: String = "new Date()"
  contactnumber: string = "akjahskd"
  address:string = "akjahskd"
  usernameOld: string = "akjahskd";
  titleOld: string = "akjahskd"
  firstnameOld: string = "akjahskd"
  lastnameOld:string  = "akjahskd"
  dateofbirthOld: String = "new Date()"
  contactnumberOld: string = "akjahskd"
  addressOld:string = "akjahskd"
  disabledFields = true;

  constructor() { }

  ngOnInit(): void {
  }

   disableFunc() {
    this.disabledFields = false;
    this.usernameOld = this.username;
    this.titleOld = this.title;
    this.firstnameOld = this.firstname;
    this.lastnameOld = this.lastname;
    this.dateofbirthOld = this.dateofbirth
    this.contactnumberOld = this.contactnumber;
    this.addressOld = this.address;
  }

  reset() {
    this.disabledFields = true;
    this.username = this.usernameOld;
    this.title = this.titleOld;
    this.firstname = this.firstnameOld;
    this.lastname = this.lastnameOld;
    this.dateofbirth = this.dateofbirthOld
    this.contactnumber = this.contactnumberOld;
    this.address = this.addressOld;

    this.usernameOld = '';
    this.titleOld = '';
    this.firstnameOld = '';
    this.lastnameOld = '';
    this.dateofbirthOld = ''
    this.contactnumberOld = '';
    this.addressOld = '';
  }

  saveEdits() {
    this.disabledFields = true;
    this.usernameOld = '';
    this.titleOld = '';
    this.firstnameOld = '';
    this.lastnameOld = '';
    this.dateofbirthOld = ''
    this.contactnumberOld = '';
    this.addressOld = '';

    //Need to update backend


  }

}
