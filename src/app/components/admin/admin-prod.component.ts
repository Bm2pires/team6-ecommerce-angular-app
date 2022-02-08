import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductDetails } from 'src/app/services/interfaces/productDetails';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-prod.component.html',
  styleUrls: ['./admin-prod.component.css'],
})
export class AdminComponent implements OnInit {
  products!: ProductDetails[];

  constructor(private prodService: ProductService) {}

  ngOnInit(): void {
    this.prodService.findAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  delProd(id: any) {
    this.prodService.delProd(id).subscribe((data) => {
      console.log(data);
    });
  }
}
