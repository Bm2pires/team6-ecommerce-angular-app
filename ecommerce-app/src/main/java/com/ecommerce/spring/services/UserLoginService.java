package com.ecommerce.spring.services;

import java.sql.Date;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.spring.entities.User;
import com.ecommerce.spring.repositories.UserRepository;
import com.ecommerce.spring.reqresmodels.UserLoginRequestModel;

@Service
public class UserLoginService {

	@Autowired
	UserRepository userRepository;

	public void authenticate(UserLoginRequestModel requestModel, HttpSession session) {
		System.out.println("User authentication request received");
		System.out.println("Save Construct method executed...");

		User u1 = new User(1L, "bob@chocolate.com", "asdf", "Mr", "Bob", "Indigo", new Date(1997 - 1900, 04, 03),
				"01234956", "11 Chocolate Lane, London", false);
		userRepository.save(u1);

		User u2 = new User("heehee@chocolate.com", "asdf2", "Mr", "Hee", "Indigo", new Date(1999 - 1900, 04, 03),
				"012349567", "Paris, France", false);
		userRepository.save(u2);
		// try to find the requested user in the repository
		User user = userRepository.findByEmail(requestModel.getEmail()).get();
		System.out.println(user);
		if (user == null) {
			System.out.println("Error");
		} else {
			// if the user in the request matches the user found from the database then
			if (requestModel.getEmail().equals(user.getEmail())
					&& requestModel.getPassword().equals(user.getPassword())) {
				session.setAttribute("user", user);
				System.out.println("Login Successful!");
			} else {
				System.out.println("Login Failed");
			}
		}
	}
}
