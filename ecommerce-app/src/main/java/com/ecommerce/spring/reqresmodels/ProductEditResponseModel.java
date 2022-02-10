package com.ecommerce.spring.reqresmodels;

import com.ecommerce.spring.entities.Brand;
import com.ecommerce.spring.entities.Categories;

import lombok.Data;

@Data
public class ProductEditResponseModel {
	
	private long productId;

	private String productName;

	private String productDescription;

	private String productPrice;
	
	private String productBrand;
	
	private String productCategory;
	
	private String imageUrl;




	public ProductEditResponseModel() {
		super();
	}




	public ProductEditResponseModel(long productId, String productName, String productDescription, String productPrice,
			String productBrand, String productCategory, String imageUrl) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productDescription = productDescription;
		this.productPrice = productPrice;
		this.productBrand = productBrand;
		this.productCategory = productCategory;
		this.imageUrl = imageUrl;
	}





	
	
}
