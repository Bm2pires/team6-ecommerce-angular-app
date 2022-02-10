package com.ecommerce.spring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.spring.reqresmodels.UserRegistrationRequestModel;
import com.ecommerce.spring.reqresmodels.UserRegistrationResponseModel;
import com.ecommerce.spring.services.RegistrationService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class UserRegistrationController {

	@Autowired
	RegistrationService userRegistrationService;

	
	
	@PostMapping(value = "/registration", produces = "application/json")
	public ResponseEntity<UserRegistrationResponseModel> register(@RequestBody UserRegistrationRequestModel requestModel) throws Exception {
		UserRegistrationResponseModel user = userRegistrationService.register(requestModel);
		//return new ResponseEntity<UserRegistrationResponseModel>(user, HttpStatus.ACCEPTED);
		if(user != null) {
			return new ResponseEntity<UserRegistrationResponseModel>(user, HttpStatus.OK);
		}else {
			return new ResponseEntity<UserRegistrationResponseModel>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	

}
