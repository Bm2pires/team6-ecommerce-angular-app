package com.ecommerce.spring.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.ecommerce.spring.entities.OrderDetails;
import com.ecommerce.spring.entities.OrderItems;
import com.ecommerce.spring.entities.Products;

public interface OrderItemsRepository extends CrudRepository<OrderItems, Long>{

	List<Optional<OrderItems>> findByOrderDetails(OrderDetails orderDetails);

	List<Optional<OrderItems>> findByProducts(Products product);

}
