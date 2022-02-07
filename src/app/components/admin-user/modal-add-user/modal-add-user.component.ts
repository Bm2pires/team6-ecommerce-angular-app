import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { UserDetails } from 'src/app/services/userDetails';
import { UserModify } from 'src/app/services/userModify';

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrls: ['./modal-add-user.component.css']
})
export class ModalAddUserComponent implements OnInit {



  errors: Array<string> = [];
  valid = true

  userEmail:String = "";
  userPass:String = "";
  userTitle:String = "Mr";
  userFname: String = "";
  userLname:String = "";
  dob:string|null = new Date().toLocaleDateString();
  phonenumber:String = "";
  address:String = "";

  userModify: UserModify = {
    firstName: this.userFname,
    lastName: this.userLname,
    email: this.userEmail,
    password: this.userPass,
    title: this.userTitle,
    dateOfBirth: new Date().toLocaleDateString(),
    phoneNumber: this.phonenumber,
    address: this.address };


  titles = ['Mr', 'Mrs',
  'Miss', 'Ms'];

  submitted = false;


  closeResult = '';

  constructor(private modalService: NgbModal, private datePipe: DatePipe, private userService: UserService) {
    // "2000-04-10"
    var date = new Date();
    this.userModify.dateOfBirth = this.datePipe.transform(date,"yyyy-MM-dd")
  }
  ngOnInit(): void {
  }


  onSubmit(modal: { close: () => void; }) {
    this.submitted = true;
    this.validate();
    if(this.valid){
      this.userService.addUser(this.userModify).subscribe(data => {
        console.log(data);
      });
      this.ngOnInit();
      modal.close();
      this.reset();
    }else{
      alert(this.errors)
      this.errors = [];
    }
  }

  validate() {
    const phoneNumberCheck = Number(this.userModify.phoneNumber);
    if(Number.isNaN(phoneNumberCheck)){
      this.errors.push("Phone number must be digits");
    }
    if(this.userModify.phoneNumber.length != 10){
      this.errors.push("Phone number must be 10 digits");
    }
    const emailCheck = Array.from(this.userModify.email);
    let emailValid = false;
    emailCheck.forEach((letter) => {
      if(letter === '@'){
        emailValid = true;
      }
    })
    if(!emailValid){
      this.errors.push("Email must contain an @");
    }

    const dateCheck = this.userModify.dateOfBirth!.toString();
    let today = this.datePipe.transform(Date.now(),'yyyy-MM-dd')!;

    if(dateCheck > today){
      this.errors.push("Date of birth cannot be in the future");
    }
    let today2 = new Date();
    var birthDate = new Date(this.userModify.dateOfBirth!);
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

  onClose(modal: { close: () => void; }) {
    modal.close();
    this.reset();
  }

  reset(){
    this.userEmail = "";
    this.userPass = "";
    this.userTitle = "";
    this.userFname = "";
    this.userLname = "";
    this.dob = new Date().toLocaleDateString();
    this.phonenumber = "";
    this.address = "";

    this.userModify = {
      firstName: this.userFname,
      lastName: this.userLname,
      email: this.userEmail,
      password: this.userPass,
      title: this.userTitle,
      dateOfBirth: new Date().toLocaleDateString(),
      phoneNumber: this.phonenumber,
      address: this.address
    };
    this.submitted = false;
  }
}


