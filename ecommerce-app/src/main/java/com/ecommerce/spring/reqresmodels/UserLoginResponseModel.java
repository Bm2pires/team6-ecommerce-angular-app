package com.ecommerce.spring.reqresmodels;

import lombok.Data;

@Data
public class UserLoginResponseModel {

	private String emailAddress;
	private String password;

	public UserLoginResponseModel(String emailAddress, String password) {
		this.emailAddress = emailAddress;
		this.password = password;
	}

	public UserLoginResponseModel() {
	}

}
