import { DatePipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserDetails } from 'src/app/services/userDetails';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent implements OnInit {

  @Input()
  itemUser!: { userId:Number, email:String, password:String, title:String, firstname:String, lastname:String, dob:Date, phonenumber:String, address:String};


  errors: Array<string> = [];
  valid = true

  newUserFName: String = "";
  newUserLName: String = "";
  newUserEmail: String = "";
  newUserPassword: String = "";
  newUserTitle: String = "";
  newUserDOB: Date = new Date;
  newUserPhonenumebr: String = "";
  newUserAddress: String = "";

  newUserDetails: UserDetails = { firstName: this.newUserFName,
    lastName: this.newUserLName,
    email: this.newUserEmail,
    password: this.newUserPassword,
    title: this.newUserTitle,
    dob: this.newUserDOB,
    phoneNumber: this.newUserPhonenumebr,
    address: this.newUserAddress };

    titles = ['Mr', 'Mrs',
    'Miss', 'Ms'];

    submitted = false;


  closeResult = '';

  constructor(private modalService: NgbModal, private datePipe: DatePipe) {

  }
  ngOnInit(): void {

  }

  onSubmit(modal: { close: () => void; }){
    this.submitted = true;
    this.validate();
    if(this.valid){
      modal.close();
      this.reset();
    }else{
      alert(this.errors)
      this.errors = [];
    }
  }

  validate() {
    const phoneNumberCheck = Number(this.newUserDetails.phoneNumber);
    if(Number.isNaN(phoneNumberCheck)){
      this.errors.push("Phone number must be digitis");
    }
    if(this.newUserDetails.phoneNumber.length != 11){
      this.errors.push("Phone number must be 11 digitis");
    }
    const emailCheck = Array.from(this.newUserDetails.email);
    let emailValid = false;
    emailCheck.forEach((letter) => {
      if(letter === '@'){
        emailValid = true;
      }
    })
    if(!emailValid){
      this.errors.push("Email must contain an @");
    }

    const dateCheck = this.newUserDetails.dob.toString();
    let today = this.datePipe.transform(Date.now(),'yyyy-MM-dd')!;

    if(dateCheck > today){
      this.errors.push("Date of birth cannot be in the future");
    }
    let today2 = new Date();
    var birthDate = new Date(this.newUserDetails.dob);
    var age = today2.getFullYear() - birthDate.getFullYear();
    var m = today2.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today2.getDate() < birthDate.getDate())) {
        age--;
    }

    if(age < 18){
      this.errors.push("Age must be 18 or older");
    }


    if(this.errors.length != 0){
      this.valid = false;
    }else{
      this.valid = true;
    }
  }

  // editUser(modal: { close: () => void; }) {
  //   modal.close();
  //   // console.log(document.getElementById("userTitleNew"))
  //   // console.log("Edit User Function")
  //   // console.log(this.newUserFName)
  //   // console.log(this.newUserLName)
  //   // console.log(this.newUserEmail)
  //   console.log(this.newUserDOB)
  //   // console.log(this.newUserPhonenumebr)
  //   // console.log(this.newUserAddress)
  //   // console.log(this.newUserPassword)
  //   // console.log(this.newUserTitle)

  //  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  onClose(modal: { close: () => void; }) {
    modal.close();
    this.reset();
  }

  reset(){
    this.newUserEmail = "";
    this.newUserPassword = "";
    this.newUserTitle = "";
    this.newUserFName = "";
    this.newUserLName = "";
    this.newUserDOB = new Date;
    this.newUserPhonenumebr = "";
    this.newUserAddress = "";

    this.newUserDetails = { firstName: this.newUserFName,
      lastName: this.newUserLName,
      email: this.newUserEmail,
      password: this.newUserPassword,
      title: this.newUserTitle,
      dob: this.newUserDOB,
      phoneNumber: this.newUserPhonenumebr,
      address: this.newUserAddress };
      this.submitted = false;
  }

}
