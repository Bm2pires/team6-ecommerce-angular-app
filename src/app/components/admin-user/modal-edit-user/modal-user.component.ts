import { DatePipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent implements OnInit {

  @Input()
  itemUser!: { userId:Number, email:String, password:String, title:String, firstname:String, lastname:String, dob:Date, phonenumber:String, address:String};



  newUserFName: String = "";
  newUserLName: String = "";
  newUserEmail: String = "";
  newUserPassword: String = "";
  newUserTitle: String | undefined = "";
  newUserDOB: Date = new Date;
  newUserPhonenumebr: String = "";
  newUserAddress: String = "";


  closeResult = '';

  constructor(private modalService: NgbModal) {

  }
  ngOnInit(): void {

  }

  editUser(modal: { close: () => void; }) {
    modal.close();
    // console.log(document.getElementById("userTitleNew"))
    // console.log("Edit User Function")
    // console.log(this.newUserFName)
    // console.log(this.newUserLName)
    // console.log(this.newUserEmail)
    console.log(this.newUserDOB)
    // console.log(this.newUserPhonenumebr)
    // console.log(this.newUserAddress)
    // console.log(this.newUserPassword)
    // console.log(this.newUserTitle)

   }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    // console.log(document.getElementById("userTitleNew")?.firstChild.hasAttribute(selected))


    // console.log(this.itemUser)
    // this.newUserFName  = "";
    // this.newUserLName  = "";
    // this.newUserEmail = "";
    // this.newUserPassword  = "";
    // this.newUserTitle = "";
    // this.newUserDOB = Date.now();
    // this.newUserPhonenumebr = "";
    // this.newUserAddress = "";



    // if(this.itemUser.title === "Mr"){
    //   this.titelIndex = 0;
    // }else if(this.itemUser.title === "Mrs"){
    //   this.titelIndex = 1;
    // }if(this.itemUser.title === "Miss"){
    //   this.titelIndex = 2;
    // }if(this.itemUser.title === "Ms"){
    //   this.titelIndex = 3;
    // }

    // this.selectedOption = this.itemUser.title
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

}
