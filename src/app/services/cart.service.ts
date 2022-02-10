import { Injectable } from '@angular/core';
import { ProductDetails } from './interfaces/productDetails';
import { ProductOrders } from './interfaces/productOrders';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: ProductOrders[] = [];
  totalPrice: number = 0;


  constructor() { }

  addToCart(product: ProductDetails) {
    let index = null;
    this.products.map((e)=>{
      if (e.productId === product.productId) {
        index = this.findIndex(e.productId);
      }})

    if(index != null){
      this.products[index].quantity = this.products[index].quantity + 1
    }else{
      let productOrders: ProductOrders = new ProductOrders();
      productOrders.productId = product.productId;
      productOrders.productName = product.productName;
      productOrders.productDescription = product.productDescription;
      productOrders.productPrice = product.productPrice;
      productOrders.brand = product.productBrand;
      productOrders.category = product.productCategory;
      productOrders.imageUrl = product.imageUrl;
      productOrders.quantity = 1;

      this.products.push(productOrders);
    }
    this.calculatePrice();
  }

  calculatePrice() {
    this.totalPrice = 0;
    this.products.forEach((prod)=> {
      let price = prod.productPrice * prod.quantity;
      this.totalPrice = this.totalPrice + price;
    })
  }

  getItems() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    return this.products;
  }

  removeProd(id:number) {
    let index = this.findIndex(id);
    this.products.splice(index, 1)
    this.calculatePrice()
  }

  findIndex(id:number){
    let index = this.products.findIndex(d => d.productId === id)
    return index;
  }

  decreseQuantity(productOrders: ProductOrders) {
    let index = this.findIndex(productOrders.productId);
    this.products[index].quantity = productOrders.quantity - 1;
    this.calculatePrice()
  }

  checkIfCartIsEmpty() {
    if(this.products.length === 0){
      return true;
    }else{
      return false;
    }
  }

}
