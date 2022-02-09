package com.ecommerce.spring.reqresmodels;

import lombok.Data;

@Data
public class CategoryResponseModel {

	private long categoryId;
	private String categoryName;

	public CategoryResponseModel() {
		super();
	}

	public CategoryResponseModel(long categoryId, String categoryName) {
		super();
		this.categoryId = categoryId;
		this.categoryName = categoryName;
	}

}
