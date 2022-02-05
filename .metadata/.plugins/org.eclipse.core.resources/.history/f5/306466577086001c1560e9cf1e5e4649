package com.ecommerce.spring.services;

import java.util.Date;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.spring.entities.User;
import com.ecommerce.spring.repositories.UserRepository;
import com.ecommerce.spring.reqresmodels.UserDetailRequestModel;
import com.ecommerce.spring.reqresmodels.UserDetailResponseModel;
import com.ecommerce.spring.reqresmodels.UserLoginRequestModel;

@Service
public class UserEditService {

	@Autowired
	UserRepository userRepository;
	
	public UserDetailResponseModel editUser(UserDetailRequestModel requestModel) {
		//Validation for each input
		Optional<User> user = userRepository.findById(requestModel.getId());
		boolean valid = validateInput(requestModel);
		if(valid) {
			if(user != null) {		
				user.get().setAddress(requestModel.getAddress());
				user.get().setDob(requestModel.getDateOfBirth());
				user.get().setEmail(requestModel.getEmail());
				user.get().setFirstName(requestModel.getFirstName());
				user.get().setLastName(requestModel.getLastName());
				user.get().setPassword(requestModel.getPassword());
				user.get().setPhone_number(requestModel.getPhoneNumber());
				user.get().setTitle(requestModel.getTitle());
				userRepository.save(user.get());
				return new UserDetailResponseModel(user.get().getUserId(), user.get().getFirstName(), user.get().getLastName(), user.get().getEmail(), user.get().getTitle(), user.get().getPassword(),
						user.get().getDob(), user.get().getPhone_number(), user.get().getAddress());
			}else {
				return null;
			}
		}else {
			return null;
		}

		
	}
	
	public boolean validateInput(UserDetailRequestModel requestModel) {
		boolean validInput = true;
		if(requestModel.getAddress().length() > 150) {
			validInput = false;
		}
//		if(requestModel.getDateOfBirth()) {
//					
//		}
		if(requestModel.getEmail().length() > 50) {
			validInput = false;

		}
		if(requestModel.getFirstName().length() > 20) {
			validInput = false;

		}
		if(requestModel.getLastName().length() > 20) {
			validInput = false;

		}
		if(requestModel.getPassword().length() > 20) {
			validInput = false;

		}
		if(requestModel.getPhoneNumber().length() > 10) {
			validInput = false;

		}
		if(requestModel.getTitle().length() > 5) {
			validInput = false;

		}
		return validInput;
		
	}
}
