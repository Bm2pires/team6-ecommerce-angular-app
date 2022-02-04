package com.ecommerce.spring;

import java.sql.Date;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.ecommerce.spring.entities.User;
import com.ecommerce.spring.repositories.UserRepository;

@SpringBootApplication
public class EcommerceAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommerceAppApplication.class, args);
	}

	@Autowired
	UserRepository userRepository;

	// when all beans will be initialized, life cycle hook will be executed
	@PostConstruct
	public void dboperations() {
		System.out.println("Post construct method executed...");
		save();

	}

	private void save() {
		System.out.println("Post Construct method executed...");

		User u1 = new User(1L, "bob@chocolate.com", "asdf", "Mr", "Bob", "Indigo", new Date(1997 - 1900, 04, 03),
				"01234956", "11 Chocolate Lane, London", false);
		userRepository.save(u1);

		User u2 = new User("heehee@chocolate.com", "asdf2", "Mr", "Hee", "Indigo", new Date(1999 - 1900, 04, 03),
				"012349567", "Paris, France", false);
		userRepository.save(u2);

//		Product p1 = new Product(1, "Pencil", "Stationary item", "http://abc.jpg", 160);
//		repository.save(p1);

	}
}
