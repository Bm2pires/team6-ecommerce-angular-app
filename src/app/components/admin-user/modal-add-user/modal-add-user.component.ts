import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserDetails } from 'src/app/services/userDetails';

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
  userTitle:String = "";
  userFname: String = "";
  userLname:String = "";
  dob:Date = new Date;
  phonenumber:String = "";
  address:String = "";
  password:String = "";

  userDetails: UserDetails = { firstName: this.userFname,
    lastName: this.userLname,
    email: this.userEmail,
    password: this.password,
    title: this.userTitle,
    dob: this.dob,
    phoneNumber: this.phonenumber,
    address: this.address };


  titles = ['Mr', 'Mrs',
  'Miss', 'Ms'];

  submitted = false;


  closeResult = '';

  constructor(private modalService: NgbModal) {
    console.log(this.submitted)
  }
  ngOnInit(): void {
  }


  onSubmit(modal: { close: () => void; }) {
    this.submitted = true;
    this.validate();
    if(this.valid){
      modal.close();
      this.reset();
    }else{
      alert(this.errors.forEach((el)=>el))
    }
  }

  validate() {
    const phoneNumberCheck = Number(this.userDetails.phoneNumber);
    if(phoneNumberCheck == NaN){
      this.errors.push("Phone number must be digitis");
    }
    const dateCheck = this.userDetails.dob;
    if(dateCheck > new Date()){
      this.errors.push("Date of birth cannot be in the future");
    }
    //Need to add must be 18


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
    this.dob = new Date;
    this.phonenumber = "";
    this.address = "";
    this.password = "";

    this.userDetails = { firstName: this.userFname,
      lastName: this.userLname,
      email: this.userEmail,
      password: this.password,
      title: this.userTitle,
      dob: this.dob,
      phoneNumber: this.phonenumber,
      address: this.address
    };
    this.submitted = false;
  }
}


