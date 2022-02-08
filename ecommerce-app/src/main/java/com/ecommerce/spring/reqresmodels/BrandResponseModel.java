package com.ecommerce.spring.reqresmodels;

import lombok.Data;

@Data
public class BrandResponseModel {

	private long brandId;
	private String brandName;

	public BrandResponseModel(long brandId, String brandName) {
		super();
		this.brandId = brandId;
		this.brandName = brandName;
	}

	public BrandResponseModel() {
		super();
	}

}
