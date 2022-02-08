import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';
import { ProductDetails } from 'src/app/services/interfaces/productDetails';
import { ProductModify } from 'src/app/services/interfaces/productModify';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-prod.component.html',
  styleUrls: ['./modal-prod.component.css'],
})
export class ModalComponent implements OnInit {
  //Gets Product from main admin-prod component
  @Input()
  item!: { productId: number; productName: string; productDescription: string; productPrice: number; brand: string, category: string, imageUrl:string};

  //Will be filled with erros of user input
  errors: Array<string> = [];
  valid = true;

  //Stores product details
  productDetails: ProductDetails = {
    productId: 0,
    productName: "",
    productDescription: "",
    productPrice: 0,
    brand: "",
    category: "",
    imageUrl: ""
  };

  //Checks if form is usbmitted
  submitted = false;

  closeResult = '';

  constructor(private modalService: NgbModal, private prodService: ProductService) {
  }
  //Sets the productid to the one given by admin-prod componenet
  ngOnInit(): void {
    this.productDetails.productId = this.item.productId;
  }

  onSubmit(modal: { close: () => void }) {
    this.submitted = true;
    //Chekcs if user inpu tis valid
    this.validate();
    if (this.valid) {
      this.prodService.editProd(this.productDetails).subscribe((data) => {
        console.log(data);
      });
      modal.close();
      this.reset();
    }else{
      //Alerts users to their erroros in input
      alert(this.errors)
      this.errors = [];
    }
  }

  //checks user input
  validate() {
    if (this.productDetails.productName.length < 3) {
      this.errors.push('Product name must be greater than 3 characters');
    }

    if (this.productDetails.productDescription.length < 10) {
      this.errors.push(
        'Product description must be greater than 10 characters'
      );
    }

    if (this.productDetails.productPrice === 0) {
      this.errors.push('Product price must not be 0.00');
    }

    if(this.productDetails.brand.length < 3){
      this.errors.push("Product brand must be greater than 3 characters");
    }

    if(this.productDetails.category.length < 2){
      this.errors.push("Product category must be greater than 2 characters");
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

    //Sets the product to the product given by admin-prod component
    this.productDetails.productName = this.item.productName;
    this.productDetails.productDescription = this.item.productDescription;
    this.productDetails.productPrice = this.item.productPrice;
    this.productDetails.brand = this.item.brand;
    this.productDetails.category = this.item.category;
    this.productDetails.imageUrl = this.item.imageUrl;


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

  onClose(modal: { close: () => void }) {
    modal.close();
    this.reset();
  }

  reset() {
    //resets product to defaults
    this.productDetails = {
      productId: 0,
      productName: "",
      productDescription: "",
      productPrice: 0,
      brand: "",
      category: "",
      imageUrl: "",
    };

    this.submitted = false;
  }
}
