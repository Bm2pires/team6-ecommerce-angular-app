package com.ecommerce.spring.reqresmodels;

import lombok.Data;

@Data
public class ProductAddRequestModel {

	private String productName;

	private String productDescription;

	private String productPrice;
	
	private String productBrand;
	
	private String productCategory;


	

	public ProductAddRequestModel() {
		super();
	}




	public ProductAddRequestModel(String productName, String productDescription, String productPrice,
			String productBrand, String productCategory) {
		super();
		this.productName = productName;
		this.productDescription = productDescription;
		this.productPrice = productPrice;
		this.productBrand = productBrand;
		this.productCategory = productCategory;
	}




}
