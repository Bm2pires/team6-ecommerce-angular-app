import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetails } from 'src/app/services/productDetails';

@Component({
  selector: 'app-modal-add-prod',
  templateUrl: './modal-add-prod.component.html',
  styleUrls: ['./modal-add-prod.component.css']
})
export class ModalAddProdComponent implements OnInit {

  errors: Array<string> = [];
  valid = true

  prodName:String = "";
  prodDescription:String = "";
  prodPrice:Number = 0;

  productDetails: ProductDetails = {
    productId: 0,
    productName: this.prodName,
    productDesc: this.prodDescription,
    productPrice: this.prodPrice,
    category: "",
    brand: ""
  };

  submitted = false;


  closeResult = '';

  constructor(private modalService: NgbModal) {
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

  onClose(modal: { close: () => void; }){
    modal.close();
    this.reset();
  }

  reset() {
    this.prodName = "";
    this.prodDescription = "";
    this.prodPrice = 0.0;

    this.productDetails = {
      productId: 0,
      productName: this.prodName,
      productDesc: this.prodDescription,
      productPrice: this.prodPrice,
      category: "",
      brand: ""
    };

    this.submitted = false;
  }

}
