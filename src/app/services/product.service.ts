import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './productDetails';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http: HttpClient;
  baseUrl: string = 'http://localhost:3000';

  constructor(http: HttpClient) {
    this.http = http;
  }

  // getProductsFromDB(product: Product[]) {
  //   return this.http.get(`${this.baseUrl}/getProducts`, product);
  // }
}
