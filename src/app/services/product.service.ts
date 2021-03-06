import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Brand } from './interfaces/brand';
import { Categories } from './interfaces/categories';
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
        id: prodId,
      },
    });
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

  getAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.baseUrl + 'getAllBrands');
  }

  getAllCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.baseUrl + 'getAllCategories');
  }

  getAllProductsByBrand(brandName: string): Observable<ProductDetails[]> {
    return this.http.get<ProductDetails[]>(
      this.baseUrl + `getAllProd/brand/${brandName}`
    );
  }

  getAllProductsByCategory(category: string): Observable<ProductDetails[]> {
    return this.http.get<ProductDetails[]>(
      this.baseUrl + `getAllProd/category/${category}`
    );
  }

  getAllProductsByBrandAndCategory(
    brandName: string,
    category: string
  ): Observable<ProductDetails[]> {
    return this.http.get<ProductDetails[]>(
      this.baseUrl + `getAllProd/brand/${brandName}/category/${category}`
    );
  }

  // comparator function
  sortProductsByPriceAsc(a: ProductDetails, b: ProductDetails) {
    if (a.productPrice < b.productPrice) {
      return -1;
    }
    if (a.productPrice > b.productPrice) {
      return 1;
    }
    return 0;
  }

  // comparator function
  sortProductsByPriceDesc(a: ProductDetails, b: ProductDetails) {
    if (a.productPrice < b.productPrice) {
      return 1;
    }
    if (a.productPrice > b.productPrice) {
      return -1;
    }
    return 0;
  }

  // comparator function
  sortProductsByBrandAtoZ(a: ProductDetails, b: ProductDetails) {
    if (a.productBrand < b.productBrand) {
      return -1;
    }
    if (a.productBrand > b.productBrand) {
      return 1;
    }
    return 0;
  }

  // comparator function
  sortProductsByBrandZtoA(a: ProductDetails, b: ProductDetails) {
    if (a.productBrand < b.productBrand) {
      return 1;
    }
    if (a.productBrand > b.productBrand) {
      return -1;
    }
    return 0;
  }
}
