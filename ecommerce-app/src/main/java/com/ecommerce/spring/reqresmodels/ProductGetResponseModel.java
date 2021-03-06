package com.ecommerce.spring.reqresmodels;

import lombok.Data;

@Data
public class ProductGetResponseModel {
	private long productId;

	private String productName;

	private String productDescription;

	private String productPrice;

	private String imageUrl;

	private String productBrand;

	private String productCategory;

	public ProductGetResponseModel() {
		super();
	}

	// new constructor with image url
	public ProductGetResponseModel(long productId, String productName, String productDescription, String productPrice,
			String imageUrl, String productCategory, String productBrand) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productDescription = productDescription;
		this.productPrice = productPrice;
		this.imageUrl = imageUrl;
		this.productCategory = productCategory;
		this.productBrand = productBrand;
	}

}
