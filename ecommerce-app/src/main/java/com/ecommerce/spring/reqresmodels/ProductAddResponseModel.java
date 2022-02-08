package com.ecommerce.spring.reqresmodels;

import lombok.Data;

@Data
public class ProductAddResponseModel {
	private String productName;

	private String productDescription;

	private String productPrice;
	
	private String productBrand;
	
	private String productCategory;
	private String imageUrl;


	public ProductAddResponseModel() {
		super();
	}


	public ProductAddResponseModel(String productName, String productDescription, String productPrice,
			String productBrand, String productCategory, String imageUrl) {
		super();
		this.productName = productName;
		this.productDescription = productDescription;
		this.productPrice = productPrice;
		this.productBrand = productBrand;
		this.productCategory = productCategory;
		this.imageUrl = imageUrl;
	}




}
