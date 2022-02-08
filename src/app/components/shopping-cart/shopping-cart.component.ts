import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductDetails } from 'src/app/services/interfaces/productDetails';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products = this.cartService.getItems();
  empty = true
  price = this.cartService.totalPrice;



  constructor(private cartService: CartService) {
    if(this.products.length === 0){
      this.empty = true;
    }else{
      this.empty = false;
    }
    console.log(this.products)
  }

  ngOnInit(): void {

  }

  removeFromCart(id:number){
    this.cartService.removeProd(id);
  }

}
