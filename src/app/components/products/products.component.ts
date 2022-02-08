import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/services/interfaces/productDetails';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productService: ProductService;
  products!: ProductDetails[];

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productService.findAllProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
}
