package com.ecommerce.spring.reqresmodels;

import lombok.Data;

@Data
public class UserLoginRequestModel {

	private String email;
	private String password;

	public UserLoginRequestModel(String email, String password) {
		this.email = email;
		this.password = password;
	}

	public UserLoginRequestModel() {
	}

}
