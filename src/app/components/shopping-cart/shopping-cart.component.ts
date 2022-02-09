import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductDetails } from 'src/app/services/interfaces/productDetails';
import { ProductOrders } from 'src/app/services/interfaces/productOrders';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products  = this.cartService.getItems();
  empty = true
  price : number;



  constructor(private cartService: CartService) {
    if(this.products.length === 0){
      this.empty = true;
    }else{
      this.empty = false;
    }
  }

  ngOnInit(): void {
    this.products = this.cartService.getItems();
    this.price = this.cartService.totalPrice;
  }

  removeAllFromCart(id:number){
    this.cartService.removeProd(id);

    setTimeout(()=>{
      this.ngOnInit();
    }, 300)

    this.empty = this.cartService.checkIfCartIsEmpty();
  }

  removeOneFromCart(id:number){
    let x: ProductOrders = this.products[this.cartService.findIndex(id)];
    if(x.quantity > 1){
      this.cartService.decreseQuantity(x)
    }else{
      this.cartService.removeProd(id);
    }

    setTimeout(()=>{
      this.ngOnInit();
    }, 300)

    this.empty = this.cartService.checkIfCartIsEmpty();
  }

  clearCart(){
    this.cartService.clearCart();

    setTimeout(()=>{
      this.ngOnInit();
    }, 300)

    this.empty = this.cartService.checkIfCartIsEmpty();
  }



}
