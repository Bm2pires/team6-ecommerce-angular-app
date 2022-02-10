package com.ecommerce.spring.reqresmodels;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;
@Data
public class UserRegistrationResponseModel {

	private String firstName;
	private String lastName;
	private String email;
	private String title;
	private String password;
	@Temporal(TemporalType.DATE)
	private Date dob;
	private Long phone_number;
	private String address;
	
	public UserRegistrationResponseModel(String firstName, String lastName, String email, String title, String password,
			Date dob, Long phone_number, String address) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.title = title;
		this.password = password;
		this.dob = dob;
		this.phone_number = phone_number;
		this.address = address;
	}
	
	public UserRegistrationResponseModel() {
		super();
	}


	
}
