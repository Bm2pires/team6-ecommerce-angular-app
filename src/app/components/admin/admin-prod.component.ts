import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductDetails } from 'src/app/services/interfaces/productDetails';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-prod.component.html',
  styleUrls: ['./admin-prod.component.css'],
})
export class AdminComponent implements OnInit {

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
    this.prodService.delProd(id).subscribe(data => {
    });
    this.ngOnInit();
  }


}
