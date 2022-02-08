import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/services/interfaces/brand';
import { Categories } from 'src/app/services/interfaces/categories';
import { ProductDetails } from 'src/app/services/interfaces/productDetails';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productService: ProductService;
  products!: ProductDetails[];
  brands!: Brand[];
  categories!: Categories[];

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  ngOnInit(): void {
    this.listBrands();
    this.listCategories();
    this.listProducts();
  }

  listProducts() {
    this.productService.findAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  listBrands() {
    this.productService.getAllBrands().subscribe((data) => {
      this.brands = data;
    });
  }

  listCategories() {
    this.productService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  // detects changes in select boxes
  onChange(event) {
    // get value from brand select element
    let brandSelect = <HTMLSelectElement>(
      document.getElementById('brand-select')
    );
    let brandValue = brandSelect.options[brandSelect.selectedIndex].value;

    // get value from category select element
    let categorySelect = <HTMLSelectElement>(
      document.getElementById('category-select')
    );
    let categoryValue =
      categorySelect.options[categorySelect.selectedIndex].value;

    // if both are selected then call API Endpoint for both brand and category
    if (brandValue != '' && categoryValue != '') {
      this.productService
        .getAllProductsByBrandAndCategory(brandValue, categoryValue)
        .subscribe((data) => {
          this.products = data;
          console.log(this.products);
        });
      // else if brand is selected and category is blank
    } else if (event.target.value != '' && categoryValue == '') {
      this.productService
        .getAllProductsByBrand(event.target.value)
        .subscribe((data) => {
          this.products = data;
        });
      // else if category is selected and brand is blank then
    } else if (event.target.value != '' && brandValue == '') {
      this.productService
        .getAllProductsByCategory(event.target.value)
        .subscribe((data) => {
          this.products = data;
        });
      // otherwise reset
    } else {
      this.productService.findAllProducts().subscribe((data) => {
        this.products = data;
      });
    }
  }
}
