package com.ecommerce.spring.repositories;

import org.springframework.data.repository.CrudRepository;

import com.ecommerce.spring.entities.User;

public interface UserRepository extends CrudRepository<User, Long> {

	public User findByEmail(String email);
}
