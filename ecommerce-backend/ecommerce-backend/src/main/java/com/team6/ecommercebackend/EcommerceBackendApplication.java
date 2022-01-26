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
	

}
