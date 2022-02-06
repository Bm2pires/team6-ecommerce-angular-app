package com.ecommerce.spring.reqresmodels;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
public class UserAddingRequestModel {
	private String firstName;
	private String lastName;
	private String email;
	private String title;
	private String password;
	private Date dateOfBirth;
	private String phoneNumber;
	private String address;
	private boolean isAdmin;
	
	public UserAddingRequestModel(String firstName, String lastName, String email, String title, String password,
			Date dateOfBirth, String phoneNumber, String address, boolean isAdmin) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.title = title;
		this.password = password;
		this.dateOfBirth = dateOfBirth;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.isAdmin = isAdmin;
	}
	
	public UserAddingRequestModel() {
		super();
	}

}
