package com.ecommerce.spring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.spring.reqresmodels.UserLoginRequestModel;
import com.ecommerce.spring.reqresmodels.UserLoginResponseModel;
import com.ecommerce.spring.services.UserLoginService;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserLoginService userLoginService;

	@PostMapping(value = "/login", produces = "application/json")
	public ResponseEntity<UserLoginResponseModel> authenticateUser(@RequestBody UserLoginRequestModel requestModel) {
		UserLoginResponseModel user = userLoginService.authenticate(requestModel);
		return new ResponseEntity<UserLoginResponseModel>(user, HttpStatus.ACCEPTED);
	}
}
