import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
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
  shoppingCart: CartService;
  deviceName:string = "";
  prodAdded:boolean = true;
  brands!: Brand[];
  categories!: Categories[];
  error: boolean;

  constructor(productService: ProductService, shoppingCart: CartService) {
    this.productService = productService;
    this.shoppingCart = shoppingCart;
  }

  ngOnInit(): void {
    this.listBrands();
    this.listCategories();
    this.listProducts();
    // default sort on page initialization
  }

  // sort function
  sortProductsByPriceAsc(a: ProductDetails, b: ProductDetails) {
    if (a.productPrice < b.productPrice) {
      return -1;
    }
    if (a.productPrice > b.productPrice) {
      return 1;
    }
    return 0;
  }

  // sort function
  sortProductsByPriceDesc(a: ProductDetails, b: ProductDetails) {
    if (a.productPrice < b.productPrice) {
      return 1;
    }
    if (a.productPrice > b.productPrice) {
      return -1;
    }
    return 0;
  }

  // sort function
  sortProductsByBrandAtoZ(a: ProductDetails, b: ProductDetails) {
    if (a.brand < b.brand) {
      return -1;
    }
    if (a.brand > b.brand) {
      return 1;
    }
    return 0;
  }

  // sort function
  sortProductsByBrandZtoA(a: ProductDetails, b: ProductDetails) {
    if (a.productPrice < b.productPrice) {
      return 1;
    }
    if (a.productPrice > b.productPrice) {
      return -1;
    }
    return 0;
  }

  // event handler for sort select on change
  onChangeSort() {
    let optionSelectElement = <HTMLSelectElement>(
      document.getElementById('sort-select')
    );
    let optionValue =
      optionSelectElement.options[optionSelectElement.selectedIndex].value;

    switch (optionValue) {
      case 'PriceAscending':
        this.products.sort(this.sortProductsByPriceAsc);
        break;
      case 'PriceDescending':
        this.products.sort(this.sortProductsByPriceDesc);
        break;
      case 'BrandAZ':
        this.products.sort(this.sortProductsByBrandAtoZ);
        break;
      case 'BrandZA':
        this.products.sort(this.sortProductsByBrandZtoA);
        break;
      default:
        break;
    }
  }

  listProducts() {
    this.productService.findAllProducts().subscribe((data) => {
      this.products = data;
      this.products.sort(this.sortProductsByPriceAsc);
    });
  }

  addToCart(id: number) {
    this.productService.findProductById(id).subscribe((data) => {
      const product:ProductDetails = data;
      this.shoppingCart.addToCart(product)
      this.deviceName = product.productName;
      this.prodAdded = false;
      setTimeout(() => {
        this.deviceName = "";
        this.prodAdded = true;
      }, 1500);
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
  onChange() {
    // reset error message to false
    this.error = false;

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
        .subscribe(
          (data) => {
            this.products = data;
            this.onChangeSort();
          },
          // if there is an error then set products to null and set error message flag to true
          () => {
            this.products = null;
            this.error = true;
          }
        );
      // else if brand is selected and category is blank
    } else if (brandValue != '' && categoryValue == '') {
      this.productService
        .getAllProductsByBrand(brandValue)
        .subscribe((data) => {
          this.products = data;
          this.onChangeSort();
        });
      // else if category is selected and brand is blank then
    } else if (categoryValue != '' && brandValue == '') {
      this.productService
        .getAllProductsByCategory(categoryValue)
        .subscribe((data) => {
          this.products = data;
          this.onChangeSort();
        });
      // otherwise reset
    } else if (brandValue == '' && categoryValue == '') {
      this.productService.findAllProducts().subscribe((data) => {
        this.products = data;
        this.onChangeSort();
      });
    }
  }
}
