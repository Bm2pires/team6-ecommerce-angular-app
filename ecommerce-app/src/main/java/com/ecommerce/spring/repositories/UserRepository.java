package com.ecommerce.spring.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.ecommerce.spring.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	public 	Optional<User> findByEmail(String email);
}
