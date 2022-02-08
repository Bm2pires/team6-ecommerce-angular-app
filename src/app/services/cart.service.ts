import { Injectable } from '@angular/core';
import { ProductDetails } from './interfaces/productDetails';
import { ProductOrders } from './interfaces/productOrders';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: ProductOrders[] = [];


  constructor() { }

  addToCart(product: ProductDetails) {
    let index = null;
    this.products.map((e)=>{
      if (e.productId === product.productId) {
        index = this.products.findIndex(d => d.productId === product.productId)
      }})

    if(index != null){
      this.products[index].quantity = this.products[index].quantity + 1
    }else{
      let productOrders: ProductOrders = new ProductOrders();
      productOrders.productId = product.productId;
      productOrders.productName = product.productName;
      productOrders.productDescription = product.productDescription;
      productOrders.productPrice = product.productPrice;
      productOrders.brand = product.brand;
      productOrders.category = product.category;
      productOrders.imageUrl = product.imageUrl;
      productOrders.quantity = 1;

      this.products.push(productOrders);
    }
  }

  getItems() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    return this.products;
  }

  removeProd(id:number) {
    let index = this.products.findIndex(d => d.productId === id)
    this.products.splice(index, 1)
  }

}
