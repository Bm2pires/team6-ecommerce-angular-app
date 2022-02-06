import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ProductDetails } from './productDetails';
import { ProductModify } from './productModify';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http: HttpClient;
  baseUrl: string;
  headers = { headers: new HttpHeaders({'Content-Type': 'application/json'})};


  constructor(http: HttpClient) {
    this.http = http;
    this.baseUrl = 'http://localhost:8081/product/';
  }

  findAllProducts(): Observable<ProductDetails[]> {
    return this.http.get<ProductDetails[]>(this.baseUrl + "getAllProd");
  }

  addProd(product: ProductModify): Observable<ProductModify> {
    // return this.http.post<ProductModify>(this.baseUrl + "addProd", JSON.stringify(product) , this.headers);
    return this.http.post<ProductModify>(this.baseUrl + "addProd", product)
  }
}
