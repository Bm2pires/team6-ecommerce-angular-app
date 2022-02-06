import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from './productDetails';
import { ProductModify } from './productModify';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http: HttpClient;
  baseUrl: string;

  constructor(http: HttpClient) {
    this.http = http;
    this.baseUrl = 'http://localhost:8081/product/';
  }

  findAllProducts(): Observable<ProductDetails[]> {
    return this.http.get<ProductDetails[]>(this.baseUrl + "getAllProd");
  }

  addProd(product: ProductModify): Observable<ProductModify> {
    return this.http.post<ProductModify>(this.baseUrl + "addProd", product);
  }
}
