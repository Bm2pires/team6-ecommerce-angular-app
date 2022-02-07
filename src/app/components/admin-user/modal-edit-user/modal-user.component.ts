import { DatePipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { UserDetails } from 'src/app/services/userDetails';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent implements OnInit {

  @Input()
  itemUser!: {id:Number, firstName:String, lastName:String, email:String, password:String, title:String, dateOfBirth:string|null, phoneNumber:String, address:String};



  errors: Array<string> = [];
  valid = true

  newUserFName: String = "";
  newUserLName: String = "";
  newUserEmail: String = "";
  newUserPassword: String = "";
  newUserTitle: String = "Mr";
  newUserDOB: string | null = new Date().toLocaleDateString();
  newUserPhonenumebr: String = "";
  newUserAddress: String = "";

  newUserDetails: UserDetails = {
    id: 0,
    firstName: this.newUserFName,
    lastName: this.newUserLName,
    email: this.newUserEmail,
    password: this.newUserPassword,
    title: this.newUserTitle,
    dateOfBirth: this.newUserDOB,
    phoneNumber: this.newUserPhonenumebr,
    address: this.newUserAddress };

    titles = ['Mr', 'Mrs',
    'Miss', 'Ms'];

    submitted = false;


  closeResult = '';

  constructor(private modalService: NgbModal, private datePipe: DatePipe, private userService: UserService) {


  }
  ngOnInit(): void {

  }

  onSubmit(modal: { close: () => void; }){
    this.submitted = true;
    this.validate();
      if(this.valid){
        this.userService.edituser(this.newUserDetails).subscribe(data => {
          console.log(data);
        });

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
    if(this.newUserDetails.phoneNumber.length != 10){
      this.errors.push("Phone number must be 10 digitis");
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

    const dateCheck = this.newUserDetails.dateOfBirth!.toString();
    let today = this.datePipe.transform(Date.now(),'yyyy-MM-dd')!;

    if(dateCheck > today){
      this.errors.push("Date of birth cannot be in the future");
    }
    let today2 = new Date();
    var birthDate = new Date(this.newUserDetails.dateOfBirth!);
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

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    var date = this.itemUser.dateOfBirth;
    this.newUserDetails.dateOfBirth = this.datePipe.transform(date,"yyyy-MM-dd")
    this.newUserDetails.title = this.itemUser.title;
    this.newUserDetails.id = this.itemUser.id;
    this.newUserDetails.firstName = this.itemUser.firstName
    this.newUserDetails.lastName = this.itemUser.lastName
    this.newUserDetails.email = this.itemUser.email
    this.newUserDetails.address = this.itemUser.address
    this.newUserDetails.password = this.itemUser.password
    this.newUserDetails.phoneNumber = this.itemUser.phoneNumber

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
    this.newUserDOB = new Date().toLocaleDateString();
    this.newUserPhonenumebr = "";
    this.newUserAddress = "";

    this.newUserDetails = {
      id: 0,
      firstName: this.newUserFName,
      lastName: this.newUserLName,
      email: this.newUserEmail,
      password: this.newUserPassword,
      title: this.newUserTitle,
      dateOfBirth: this.newUserDOB,
      phoneNumber: this.newUserPhonenumebr,
      address: this.newUserAddress };

      this.submitted = false;
  }

}
