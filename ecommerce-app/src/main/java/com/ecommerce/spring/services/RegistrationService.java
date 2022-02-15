package com.ecommerce.spring.services;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.spring.entities.User;
import com.ecommerce.spring.repositories.UserRepository;
import com.ecommerce.spring.reqresmodels.UserRegistrationRequestModel;
import com.ecommerce.spring.reqresmodels.UserRegistrationResponseModel;

@Service
public class RegistrationService {
	
	@Autowired
	UserRepository userRepository;

	public UserRegistrationResponseModel register(UserRegistrationRequestModel requestModel) throws Exception {
		System.out.println("User registration request received");
		Optional<User> user = userRepository.findByEmail(requestModel.getEmail());
	
		if (user.isEmpty()) {
				System.out.println("Register Successful!");
				ModelMapper mapper = new ModelMapper();
				UserRegistrationResponseModel returnObject = mapper.map(requestModel, UserRegistrationResponseModel.class);
				User newUser = mapper.map(requestModel, User.class);
				userRepository.save(newUser);
				return returnObject;
			
		} else {
			System.out.println("Error");
			//throw new Exception("EmailId is already exist");
		return null;
			
		}
	}
}
