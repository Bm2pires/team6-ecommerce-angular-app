import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ProductDetails } from './interfaces/productDetails';
import { ProductModify } from './interfaces/productModify';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http: HttpClient;
  baseUrl: string;
  headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(http: HttpClient) {
    this.http = http;
    this.baseUrl = 'http://localhost:8080/product/';
  }

  findAllProducts(): Observable<ProductDetails[]> {
    return this.http.get<ProductDetails[]>(this.baseUrl + 'getAllProd');
  }

  findProductById(prodId: number): Observable<ProductDetails> {
    return this.http.get<ProductDetails>(this.baseUrl + 'getProd', {
      params: {
        id: prodId
      }
    })
  }

  addProd(product: ProductModify): Observable<ProductModify> {
    return this.http.post<ProductModify>(this.baseUrl + 'addProd', product);
  }

  editProd(product: ProductDetails): Observable<ProductDetails> {
    return this.http.put<ProductDetails>(this.baseUrl + 'editProd', product);
  }

  delProd(prodId: Number): Observable<any> {
    const identifier = '/:id=' + prodId;
    return this.http.delete<any>(this.baseUrl + 'delProd' + identifier);
  }
}
function params<T>(arg0: string, params: any, arg2: { id: number; }): Observable<ProductDetails> {
  throw new Error('Function not implemented.');
}

