package com.ecommerce.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.spring.reqresmodels.BrandResponseModel;
import com.ecommerce.spring.reqresmodels.CategoryResponseModel;
import com.ecommerce.spring.reqresmodels.ProductAddRequestModel;
import com.ecommerce.spring.reqresmodels.ProductAddResponseModel;
import com.ecommerce.spring.reqresmodels.ProductEditRequestModel;
import com.ecommerce.spring.reqresmodels.ProductEditResponseModel;
import com.ecommerce.spring.reqresmodels.ProductGetResponseModel;
import com.ecommerce.spring.services.ProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

	@Autowired
	ProductService prodService;
	

	@PutMapping(value = "/editProd", produces = "application/json", consumes = "application/json")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<ProductEditResponseModel> editProd(@RequestBody ProductEditRequestModel requestModel) {
		ProductEditResponseModel predm = prodService.editProd(requestModel);
		if (predm != null) {
			return new ResponseEntity<ProductEditResponseModel>(predm, HttpStatus.OK);
		} else {
			return new ResponseEntity<ProductEditResponseModel>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping(value = "/addProd", produces = "application/json", consumes = "application/json")
	public ResponseEntity<ProductAddResponseModel> addProd(@RequestBody ProductAddRequestModel requestModel) {
		ProductAddResponseModel predm = prodService.addProd(requestModel);
		if (predm != null) {
			return new ResponseEntity<ProductAddResponseModel>(predm, HttpStatus.OK);
		} else {
			return new ResponseEntity<ProductAddResponseModel>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping(value = "/delProd/{id}", produces = "application/json")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<String> delProd(@PathVariable String id) {
		long prodId = Long.parseLong(id.substring(4));
		boolean deleted = prodService.delProd(prodId);
		if (deleted) {
			return new ResponseEntity<String>("Product Deleted", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Deletion unsuccesfull", HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping(value = "/getProd", produces = "application/json")
	public ResponseEntity<ProductGetResponseModel> getProdById(@RequestParam(name = "id") long id) {
		ProductGetResponseModel response = prodService.getProdById(id);
		if (response != null) {
			return new ResponseEntity<ProductGetResponseModel>(response, HttpStatus.OK);
		} else {
			return new ResponseEntity<ProductGetResponseModel>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping(value = "/getAllProd", produces = "application/json")
	public ResponseEntity<List<ProductGetResponseModel>> getAllProd() {
		List<ProductGetResponseModel> response = prodService.getAllProd();
		if (!response.isEmpty()) {
			return new ResponseEntity<List<ProductGetResponseModel>>(response, HttpStatus.OK);
		} else {
			return new ResponseEntity<List<ProductGetResponseModel>>(HttpStatus.NOT_FOUND);
		}
	}

	// get all brands
	@GetMapping(value = "/getAllBrands", produces = "application/json")
	public ResponseEntity<List<BrandResponseModel>> getAllBrands() {
		List<BrandResponseModel> response = prodService.getAllBrands();
		if (!response.isEmpty()) {
			return new ResponseEntity<List<BrandResponseModel>>(response, HttpStatus.OK);
		} else {
			return new ResponseEntity<List<BrandResponseModel>>(HttpStatus.NOT_FOUND);
		}
	}

	// get all categories
	@GetMapping(value = "/getAllCategories", produces = "application/json")
	public ResponseEntity<List<CategoryResponseModel>> getAllCategories() {
		List<CategoryResponseModel> response = prodService.getAllCategories();
		if (!response.isEmpty()) {
			return new ResponseEntity<List<CategoryResponseModel>>(response, HttpStatus.OK);
		} else {
			return new ResponseEntity<List<CategoryResponseModel>>(HttpStatus.NOT_FOUND);
		}
	}

	// get all products by brand name
	@GetMapping(value = "/getAllProd/brand/{brandName}", produces = "application/json")
	public ResponseEntity<List<ProductGetResponseModel>> getProdByBrand(@PathVariable String brandName) {
		List<ProductGetResponseModel> response = prodService.getProdByBrandName(brandName);
		if (!response.isEmpty()) {
			return new ResponseEntity<List<ProductGetResponseModel>>(response, HttpStatus.OK);
		} else {
			return new ResponseEntity<List<ProductGetResponseModel>>(HttpStatus.NOT_FOUND);
		}
	}

	// get all products by category name
	@GetMapping(value = "/getAllProd/category/{categoryName}", produces = "application/json")
	public ResponseEntity<List<ProductGetResponseModel>> getProdByCategory(@PathVariable String categoryName) {
		List<ProductGetResponseModel> response = prodService.getProdByCategoryName(categoryName);
		if (!response.isEmpty()) {
			return new ResponseEntity<List<ProductGetResponseModel>>(response, HttpStatus.OK);
		} else {
			return new ResponseEntity<List<ProductGetResponseModel>>(HttpStatus.NOT_FOUND);
		}
	}

	// get all products by brand name and category id
	@GetMapping(value = "/getAllProd/brand/{brandName}/category/{categoryName}", produces = "application/json")
	public ResponseEntity<List<ProductGetResponseModel>> getProdByBrandNameAndCategory(@PathVariable String brandName,
			@PathVariable String categoryName) {
		List<ProductGetResponseModel> response = prodService.getProdByBrandNameAndCategory(brandName, categoryName);
		try {
			if (!response.isEmpty()) {
				return new ResponseEntity<List<ProductGetResponseModel>>(response, HttpStatus.OK);
			} else {
				return new ResponseEntity<List<ProductGetResponseModel>>(HttpStatus.NOT_FOUND);
			}
		} catch (NullPointerException e) {
			System.out.println("No Products found for Brand name and category");
			return new ResponseEntity<List<ProductGetResponseModel>>(HttpStatus.NOT_FOUND);
		}
	}

}
