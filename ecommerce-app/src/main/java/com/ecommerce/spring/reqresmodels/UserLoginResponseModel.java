package com.ecommerce.spring.reqresmodels;

import java.util.Date;

import lombok.Data;

@Data
public class UserLoginResponseModel {
	private long id;
	private String email;
	private String password;
	private String title;
	private String firstName;
	private String lastName;
	private String phone_number;
	private Date dateOfBirth;
	private String address;
	private boolean isAdmin;

	public UserLoginResponseModel(String email, String password, String title, String firstName, String lastName,
			String phone_number, String address, boolean isAdmin, Date dateOfBirth, long id) {
		this.email = email;
		this.password = password;
		this.title = title;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone_number = phone_number;
		this.address = address;
		this.isAdmin = isAdmin;
		this.dateOfBirth = dateOfBirth;
		this.id = id;
	}

	public UserLoginResponseModel() {
	}

}
