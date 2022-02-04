import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetails } from 'src/app/services/productDetails';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-prod.component.html',
  styleUrls: ['./modal-prod.component.css']
})
export class ModalComponent implements OnInit {
  @Input()
  item!: { productId: Number; productType: String; productName: String; productDesc: String; productPrice: Number};

  errors: Array<string> = [];
  valid = true

  newProductName: String = "";
  newProductDesc: String = "";
  newProductPrice: Number = 0;

  productDetails: ProductDetails = {
    productName: this.newProductName,
    productDesc: this.newProductDesc,
    productPrice: this.newProductPrice
  };

  submitted = false;


  closeResult = '';

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
  }

  onSubmit(modal: { close: () => void; }) {
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
    if(this.productDetails.productName.length < 3){
      this.errors.push("Product name must be greater than 3 characters");
    }

    if(this.productDetails.productDesc.length < 10){
      this.errors.push("Product description must be greater than 10 characters");
    }

    if(this.productDetails.productPrice === 0){
      this.errors.push("Product price must not be 0.00");
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

    this.productDetails.productPrice = this.item.productPrice;

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

  onClose(modal: { close: () => void; }){
    modal.close();
    this.reset();
  }

  reset() {
    this.newProductName = "";
    this.newProductDesc = "";
    this.newProductPrice = 0;

    this.productDetails = {
      productName: this.newProductName,
      productDesc: this.newProductDesc,
      productPrice: this.newProductPrice
    };

    this.submitted = false;
  }


}
