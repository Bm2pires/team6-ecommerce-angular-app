import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   products = [
    {productId:1, productType:"laptop", productName:"macbook", productDesc:"Description", productPrice:100.00},
    {productId:2, productType:"laptop", productName:"macbook", productDesc:"Description", productPrice:100.00},
    {productId:3, productType:"laptop", productName:"macbook", productDesc:"Description", productPrice:100.00},
    {productId:4, productType:"laptop", productName:"macbook", productDesc:"Description", productPrice:100.00},
    {productId:5, productType:"laptop", productName:"macbook", productDesc:"Description", productPrice:100.00}

  ];

  constructor() { }

  ngOnInit(): void {
  }

  delProd(id: any){
    console.log(id);
    //Call method to delete product
  }

}
