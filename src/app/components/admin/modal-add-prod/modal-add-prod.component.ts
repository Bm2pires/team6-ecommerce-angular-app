import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-prod',
  templateUrl: './modal-add-prod.component.html',
  styleUrls: ['./modal-add-prod.component.css']
})
export class ModalAddProdComponent implements OnInit {


  prodName:String = "";
  prodDescription:String = "";
  prodPrice:Number = 0;

  closeResult = '';

  constructor(private modalService: NgbModal) {

  }
  ngOnInit(): void {
  }

  addProd(modal: { close: () => void; }) {
    modal.close();
    console.log("Add Product Function")
    console.log(this.prodName)
    console.log(this.prodDescription)
    console.log(this.prodPrice)

  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.prodName = "";
    this.prodDescription = "";
    this.prodPrice = 0;
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
