package com.team6.ecommercebackend;

import java.time.LocalDate;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.team6.ecommercebackend.entities.User;
import com.team6.ecommercebackend.repositries.UserRepository;

@SpringBootApplication
public class EcommerceBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommerceBackendApplication.class, args);
	}
	
	@Autowired
	UserRepository userRepository;
	
	//Works but only when you specefic the id - want to find a way where you dont have to speceify id
//	@PostConstruct 
//	public void addUser() {
//		LocalDate y =  LocalDate.of(2019, 2, 4);
//		User x = new User("test@eamil.com", "testPass", "Mr", "testFname", "testLname", y, "1234567899", "testAddress", false);
//
//		userRepository.save(x);
//
//	}

}
