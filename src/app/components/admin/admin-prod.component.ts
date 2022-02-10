import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductDetails } from 'src/app/services/interfaces/productDetails';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-prod.component.html',
  styleUrls: ['./admin-prod.component.css'],
})
export class AdminComponent implements OnInit {

  notice: String = "";

  //Stores all the products
  products!: ProductDetails[];

  constructor(private prodService: ProductService) {}

  //Gets products from databases and stores it in products
  ngOnInit(): void {
    this.prodService.findAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  //Deletes a specefic product
  delProd(id: any){
    // this.prodService.delProd(id).subscribe(data => {
    // }, err => {
    //   this.notice = "Deletion Succesfull"

    // });

    this.prodService.delProd(id).subscribe(response => {

    }, err => {
      //handle errors here
      if(err.status != 200){
        this.notice = "Deletion Unsuccesfull. Product may be a apart of someones order"
      }else{
        this.notice = "Deletion Succesfull"
      }
  });

    setTimeout(()=>{
      this.ngOnInit();
      this.notice = "";
    }, 1500)

  }

  relaod(message: String){
    this.notice = message;
    setTimeout(()=>{
      this.ngOnInit();
      this.notice = "";
    }, 1500)
  }


}
