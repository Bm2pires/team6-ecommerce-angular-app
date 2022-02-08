import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';
import { ProductModify } from 'src/app/services/interfaces/productModify';

@Component({
  selector: 'app-modal-add-prod',
  templateUrl: './modal-add-prod.component.html',
  styleUrls: ['./modal-add-prod.component.css'],
})
export class ModalAddProdComponent implements OnInit {

  //Error arrays. Will be filled with error messages
  errors: Array<string> = [];
  valid = true;

  //Will store all product details for adding a product
  productModify: ProductModify = {
    productName: "",
    productDescription: "",
    productPrice: 0,
    productBrand: "",
    productCategory: "",
    imageUrl: ""
  };

  //Chekcs if form ahs been submitted
  submitted = false;

  closeResult = '';

  constructor(
    private modalService: NgbModal,
    private prodService: ProductService
  ) {}

  ngOnInit(): void {}


  onSubmit(modal: { close: () => void; }) {
    this.submitted = true;
    //Cheks if input was valid
    this.validate();
    if (this.valid) {
      this.prodService.addProd(this.productModify).subscribe((data) => {
        console.log(data);
      });
      modal.close();
      //Resets modal to default fields
      this.reset();
    }else{
      //Informs user of errors made
      alert(this.errors)
      this.errors = [];
    }
  }

  validate() {
    if (this.productModify.productName.length < 3) {
      this.errors.push('Product name must be greater than 3 characters');
    }

    if (this.productModify.productDescription.length < 10) {
      this.errors.push(
        'Product description must be greater than 10 characters'
      );
    }

    if (this.productModify.productPrice === 0) {
      this.errors.push('Product price must not be 0.00');
    }

    if(this.productModify.productBrand.length < 3){
      this.errors.push("Product name must be greater than 3 characters");
    }

    if(this.productModify.productCategory.length < 2){
      this.errors.push("Product name must be greater than 2 characters");
    }

    if(this.errors.length != 0){
      this.valid = false;
    } else {
      this.valid = true;
    }
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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

  onClose(modal: { close: () => void }) {
    modal.close();
    this.reset();
  }

  reset() {
    this.productModify = {
      productName: "",
      productDescription: "",
      productPrice: 0,
      productBrand: "",
      productCategory: "",
      imageUrl: ""
    };

    this.submitted = false;
  }
}
