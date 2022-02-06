import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetails } from 'src/app/services/productDetails';
import { ProductModify } from 'src/app/services/productModify';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-prod.component.html',
  styleUrls: ['./modal-prod.component.css']
})
export class ModalComponent implements OnInit {
  @Input()
  item!: { productId: Number; productName: String; productDesc: String; productPrice: Number; brand: String, category: String};


  errors: Array<string> = [];
  valid = true

  newProductName: String = "";
  newProductDesc: String = "";
  newProductPrice: Number = 0;
  newProdutBrand: String = "";
  newProductCategory: String = "";


  productModify: ProductModify = {
    productName: this.newProductName,
    productDescription: this.newProductDesc,
    productPrice: this.newProductPrice,
    productBrand: this.newProdutBrand,
    productCategory: this.newProductCategory
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
    if(this.productModify.productName.length < 3){
      this.errors.push("Product name must be greater than 3 characters");
    }

    if(this.productModify.productDescription.length < 10){
      this.errors.push("Product description must be greater than 10 characters");
    }

    if(this.productModify.productPrice === 0){
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

    this.productModify.productPrice = this.item.productPrice;

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
    this.newProdutBrand = "";
    this.newProductCategory = "";

    this.productModify = {
      productName: this.newProductName,
      productDescription: this.newProductDesc,
      productPrice: this.newProductPrice,
      productBrand: this.newProdutBrand,
      productCategory: this.newProductCategory
    };

    this.submitted = false;
  }


}
