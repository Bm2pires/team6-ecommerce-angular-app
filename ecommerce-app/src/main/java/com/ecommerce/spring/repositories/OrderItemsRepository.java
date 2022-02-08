package com.ecommerce.spring.repositories;

import org.springframework.data.repository.CrudRepository;

import com.ecommerce.spring.entities.OrderItems;

public interface OrderItemsRepository extends CrudRepository<OrderItems, Long>{

}