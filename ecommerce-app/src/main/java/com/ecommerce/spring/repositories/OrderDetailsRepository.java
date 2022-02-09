package com.ecommerce.spring.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.ecommerce.spring.entities.OrderDetails;
import com.ecommerce.spring.entities.User;

public interface OrderDetailsRepository extends CrudRepository<OrderDetails, Long>{
	public Optional<OrderDetails> findByUser(User user);
}
