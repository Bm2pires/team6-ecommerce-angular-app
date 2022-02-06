import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductDetails } from 'src/app/services/productDetails';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-prod.component.html',
  styleUrls: ['./admin-prod.component.css']
})
export class AdminComponent implements OnInit {
  //  products = [
  //   {productId:1, productType:"laptop", productName:"macbook", productDesc:"Description", productPrice:100.00},
  //   {productId:2, productType:"laptop", productName:"macbook", productDesc:"Description", productPrice:100.00},
  //   {productId:3, productType:"laptop", productName:"macbook", productDesc:"Description", productPrice:100.00},
  //   {productId:4, productType:"laptop", productName:"macbook", productDesc:"Description", productPrice:100.00},
  //   {productId:5, productType:"laptop", productName:"macbook", productDesc:"Description", productPrice:100.00}

  // ];

  products!: ProductDetails[];


  constructor(private prodService: ProductService) { }

  ngOnInit(): void {
    this.prodService.findAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  delProd(id: any){
    this.prodService.delProd(id).subscribe(data => {
      console.log(data)
    });
    this.ngOnInit();
  }

}
