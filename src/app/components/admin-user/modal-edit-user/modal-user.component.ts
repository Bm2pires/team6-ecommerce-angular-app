import { DatePipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { UserDetails } from 'src/app/services/interfaces/userDetails';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css'],
})
export class ModalUserComponent implements OnInit {
  @Input()
<<<<<<< HEAD
  itemUser!: {id:Number, firstName:String, lastName:String, email:String, password:String, title:String, dateOfBirth:string|null, phoneNumber:String, address:String};

  confirmPass:String;
=======
  itemUser!: {
    id: Number;
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    title: String;
    dateOfBirth: string | null;
    phoneNumber: String;
    address: String;
  };
>>>>>>> 787fa5118148e07f559efaa50f7aaa5a1cf8803a

  errors: Array<string> = [];
  valid = true;

<<<<<<< HEAD
  newUserDetails: UserDetails = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    title: "Mr",
    dateOfBirth: new Date().toLocaleDateString(),
    phoneNumber: "",
    address: ""
=======
  newUserFName: String = '';
  newUserLName: String = '';
  newUserEmail: String = '';
  newUserPassword: String = '';
  newUserTitle: String = 'Mr';
  newUserDOB: string | null = new Date().toLocaleDateString();
  newUserPhonenumebr: String = '';
  newUserAddress: String = '';

  newUserDetails: UserDetails = {
    id: 0,
    firstName: this.newUserFName,
    lastName: this.newUserLName,
    email: this.newUserEmail,
    password: this.newUserPassword,
    title: this.newUserTitle,
    dateOfBirth: this.newUserDOB,
    phoneNumber: this.newUserPhonenumebr,
    address: this.newUserAddress,
>>>>>>> 787fa5118148e07f559efaa50f7aaa5a1cf8803a
  };

  titles = ['Mr', 'Mrs', 'Miss', 'Ms'];

  submitted = false;

  closeResult = '';

  constructor(
    private modalService: NgbModal,
    private datePipe: DatePipe,
    private userService: UserService
  ) {}
  ngOnInit(): void {}

  onSubmit(modal: { close: () => void }) {
    this.submitted = true;
    this.validate();
<<<<<<< HEAD
      if(this.valid){
        this.userService.edituser(this.newUserDetails).subscribe(data => {
        });
=======
    if (this.valid) {
      this.userService.edituser(this.newUserDetails).subscribe((data) => {
        console.log(data);
      });
>>>>>>> 787fa5118148e07f559efaa50f7aaa5a1cf8803a

      modal.close();
      this.reset();
    } else {
      alert(this.errors);
      this.errors = [];
    }
  }

  validate() {
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

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );

    var date = this.itemUser.dateOfBirth;
    this.newUserDetails.dateOfBirth = this.datePipe.transform(
      date,
      'yyyy-MM-dd'
    );
    this.newUserDetails.title = this.itemUser.title;
    this.newUserDetails.id = this.itemUser.id;
    this.newUserDetails.firstName = this.itemUser.firstName
    this.newUserDetails.lastName = this.itemUser.lastName
    this.newUserDetails.email = this.itemUser.email
    this.newUserDetails.address = this.itemUser.address
    this.newUserDetails.password = this.itemUser.password
    this.newUserDetails.phoneNumber = this.itemUser.phoneNumber
    this.confirmPass = this.newUserDetails.password;


  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onClose(modal: { close: () => void }) {
    modal.close();
    this.reset();
  }

  reset(){
    this.newUserDetails = {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      title: "Mr",
      dateOfBirth: new Date().toLocaleDateString(),
      phoneNumber: "",
      address: ""
    };
    this.confirmPass = "";

    this.submitted = false;
  }
}
