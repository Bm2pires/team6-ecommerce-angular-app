import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
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
  shoppingCart: CartService;

  constructor(productService: ProductService, shoppingCart: CartService) {
    this.productService = productService;
    this.shoppingCart = shoppingCart;
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

  addToCart(id: number) {
    this.productService.findProductById(id).subscribe((data) => {
      const product:ProductDetails = data;
      this.shoppingCart.addToCart(product)
      alert(product.productName + " added to shopping cart")
    });
  }
}
