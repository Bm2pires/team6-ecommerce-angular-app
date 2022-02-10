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
  deviceName: string = '';
  prodAdded: boolean = true;
  brands!: Brand[];
  categories!: Categories[];
  error: boolean;

  constructor(productService: ProductService, shoppingCart: CartService) {
    this.productService = productService;
    this.shoppingCart = shoppingCart;
  }

  ngOnInit(): void {
    // list brands, categories on select boxes and get products from db
    this.listBrands();
    this.listCategories();
    this.listProducts();
  }

  // event handler for sort select on change for sorting products accordingly
  onChangeSort() {
    let optionSelectElement = <HTMLSelectElement>(
      document.getElementById('sort-select')
    );
    let optionValue =
      optionSelectElement.options[optionSelectElement.selectedIndex].value;

    switch (optionValue) {
      case 'PriceAscending':
        this.products.sort(this.productService.sortProductsByPriceAsc);
        break;
      case 'PriceDescending':
        this.products.sort(this.productService.sortProductsByPriceDesc);
        break;
      case 'BrandAZ':
        this.products.sort(this.productService.sortProductsByBrandAtoZ);
        break;
      case 'BrandZA':
        this.products.sort(this.productService.sortProductsByBrandZtoA);
        break;
      default:
        break;
    }
  }

  listProducts() {
    this.productService.findAllProducts().subscribe((data) => {
      this.products = data;
      this.products.sort(this.productService.sortProductsByPriceAsc);
    });
  }

  addToCart(id: number) {
    this.productService.findProductById(id).subscribe((data) => {
      const product: ProductDetails = data;
      this.shoppingCart.addToCart(product);
      this.deviceName = product.productName;
      this.prodAdded = false;
      setTimeout(() => {
        this.deviceName = '';
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

  // function to detech changes on brand and category select boxed and call API endpoints accordingly
  onChange() {
    // reset error message to false
    this.error = false;

    // retrieve value from brand select element
    let brandSelect = <HTMLSelectElement>(
      document.getElementById('brand-select')
    );
    let brandValue = brandSelect.options[brandSelect.selectedIndex].value;

    // retrieve value from category select element
    let categorySelect = <HTMLSelectElement>(
      document.getElementById('category-select')
    );
    let categoryValue =
      categorySelect.options[categorySelect.selectedIndex].value;

    // if both brand and category are selected then call API Endpoint for both brand and category to retrieve the
    // appropriate products
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

      // else if brand is selected and category is blank then call appropriate API endpoint
    } else if (brandValue != '' && categoryValue == '') {
      this.productService
        .getAllProductsByBrand(brandValue)
        .subscribe((data) => {
          this.products = data;
          this.onChangeSort();
        });
      // else if category is selected and brand is blank then call appropriate API endpoint
    } else if (categoryValue != '' && brandValue == '') {
      this.productService
        .getAllProductsByCategory(categoryValue)
        .subscribe((data) => {
          this.products = data;
          this.onChangeSort();
        });
      // otherwise reset the products to all products
    } else if (brandValue == '' && categoryValue == '') {
      this.productService.findAllProducts().subscribe((data) => {
        this.products = data;
        this.onChangeSort();
      });
    }
  }
}
