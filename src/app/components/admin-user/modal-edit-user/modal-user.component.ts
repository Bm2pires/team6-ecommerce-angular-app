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
  //Gets user from main admin-user component
  @Input()
  itemUser!: {id:number, firstName:string, lastName:string, email:string, password:string, title:string, dateOfBirth:string|null, phoneNumber:string, address:string};

  //Used to check if user password matches
  confirmPass:String;

  //Will be filled with user input errors
  errors: Array<string> = [];
  valid = true;

  //Used to store user details
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
    //Checks if user input is valid
    this.validate();
      if(this.valid){
        this.userService.edituser(this.newUserDetails).subscribe(data => {
        });

      modal.close();
      this.reset();
    } else {
      //Will aler tuser to input errors
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

    //formats date to readable format
    var date = this.itemUser.dateOfBirth;
    this.newUserDetails.dateOfBirth = this.datePipe.transform(
      date,
      'yyyy-MM-dd'
    );
    //Populates user details with correct user from admin-user
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

  //Resests userdetails to default settings
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
