package com.ecommerce.spring.repositories;

import org.springframework.data.repository.CrudRepository;

import com.ecommerce.spring.entities.OrderDetails;

public interface OrderDetailsRepository extends CrudRepository<OrderDetails, Long>{

}