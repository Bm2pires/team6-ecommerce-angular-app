package com.ecommerce.spring.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.spring.entities.OrderDetails;
import com.ecommerce.spring.entities.OrderItems;
import com.ecommerce.spring.entities.User;
import com.ecommerce.spring.repositories.OrderDetailsRepository;
import com.ecommerce.spring.repositories.OrderItemsRepository;
import com.ecommerce.spring.repositories.ProductRepository;

@Service
public class OrderDetailsService {
	@Autowired
	OrderDetailsRepository orderDetailsRepo;

	@Autowired
	OrderItemsRepository orderItemsRepo;
	
	public boolean checkIfUserHasOrderDetailsOrOrders(User user) {
		Optional<OrderDetails> orderDetails = orderDetailsRepo.findByUser(user);

		if(orderDetails.isPresent()) {
			List<OrderItems> orderitems = orderDetails.get().getOrders();
			
			if(orderitems.isEmpty()) {
				return false;
			}else {
				return true;
			}
		}else {
			return false;
		}
	}
	
	public boolean delOrderDetails(long id) {
		Optional<OrderDetails> orderDetails = orderDetailsRepo.findById(id);

		if(orderDetails.isPresent()) {
			List<OrderItems> orderItems = orderDetails.get().getOrders();
			
			if(!orderItems.isEmpty()) {
				for(OrderItems o: orderItems) {
					orderItemsRepo.deleteById(o.getOrderItemsID());
				}
			}
			orderDetailsRepo.deleteById(id);
			return true;
		}else {
			return false;
		}
	}
}