import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { UserDetails } from 'src/app/services/interfaces/userDetails';
import { UserModify } from 'src/app/services/interfaces/userModify';

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrls: ['./modal-add-user.component.css'],
})
export class ModalAddUserComponent implements OnInit {

  confirmPass:String;


  errors: Array<string> = [];
  valid = true;

  userModify: UserModify = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    title: "Mr",
    dateOfBirth: new Date().toLocaleDateString(),
    phoneNumber: "",
    address: ""
  };


  titles = ['Mr', 'Mrs', 'Miss', 'Ms'];

  submitted = false;

  closeResult = '';

  constructor(private modalService: NgbModal, private datePipe: DatePipe, private userService: UserService) {
    var date = new Date();
    this.userModify.dateOfBirth = this.datePipe.transform(date, 'yyyy-MM-dd');
  }
  ngOnInit(): void {}

  onSubmit(modal: { close: () => void }) {
    this.submitted = true;
    this.validate();
    if(this.valid){
      this.userService.addUser(this.userModify).subscribe(data => {
      });

      modal.close();
      this.reset();
    } else {
      alert(this.errors);
      this.errors = [];
    }
  }

  validate() {
    const phoneNumberCheck = Number(this.userModify.phoneNumber);
    if (Number.isNaN(phoneNumberCheck)) {
      this.errors.push('Phone number must be digits');
    }
    if (this.userModify.phoneNumber.length != 10) {
      this.errors.push('Phone number must be 10 digits');
    }
    const emailCheck = Array.from(this.userModify.email);
    let emailValid = false;
    emailCheck.forEach((letter) => {
      if (letter === '@') {
        emailValid = true;
      }
    });
    if (!emailValid) {
      this.errors.push('Email must contain an @');
    }

    if(this.userModify.password != this.confirmPass || this.confirmPass === ""){
      this.errors.push("Passwords do not match")

    }

    if(this.userModify.address === "" || this.userModify.email === "" || this.userModify.firstName === "" || this.userModify.lastName === "" || this.userModify.password === "" || this.userModify.phoneNumber === ""){
      this.errors.push("Please fill in all fields")
    }

    if (this.errors.length != 0) {
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
  }

  private getDismissReason(reason: any): string {
    this.reset();
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
    this.userModify = {
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
