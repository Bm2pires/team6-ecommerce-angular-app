package com.ecommerce.spring.reqresmodels;

import lombok.Data;

@Data
public class CategoryResponseModel {

	private long categoryid;
	private String categoryName;

	public CategoryResponseModel(long categoryid, String categoryName) {
		super();
		this.categoryid = categoryid;
		this.categoryName = categoryName;
	}

	public CategoryResponseModel() {
		super();
	}

}
