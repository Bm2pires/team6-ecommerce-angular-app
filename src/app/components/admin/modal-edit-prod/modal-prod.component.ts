import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-prod.component.html',
  styleUrls: ['./modal-prod.component.css']
})
export class ModalComponent implements OnInit {
  @Input()
  item!: { productId: Number; productType: String; productName: String; productDesc: String; productPrice: Number};

  newProductName: String = "";
  newProductDesc: String = "";
  newProductPrice: Number = 0;

  closeResult = '';

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
  }

  editProduct(modal: { close: () => void; }) {
    modal.close();
    console.log("Edit product Function")
    console.log(this.newProductName)
    console.log(this.newProductDesc)
    console.log(this.newProductPrice)
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    console.log(this.item)
    this.newProductName = "";
    this.newProductDesc = "";
    this.newProductPrice = 0;
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
