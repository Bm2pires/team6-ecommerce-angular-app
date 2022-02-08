import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/services/interfaces/brand';
import { Categories } from 'src/app/services/interfaces/categories';
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
  brands!: Brand[];
  categories!: Categories[];

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productService.findAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  listBrands() {}

  listCategories() {}

  onChange(value) {
    console.log(value);
  }
}
