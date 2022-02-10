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
	
	
	//Checks if user has order details and if they do have order details checks if it has orders
	public boolean checkIfUserHasOrderDetailsOrOrders(User user) {
		//Returns the order details matched with user given in param
		Optional<OrderDetails> orderDetails = orderDetailsRepo.findByUser(user);

		//Check if user has order details
		if(orderDetails.isPresent()) {
			//Returns list of user's order_items
			List<OrderItems> orderitems = orderDetails.get().getOrders();
			
			//Check if users order list is empty and if so returns false otherwise returns true
			if(orderitems.isEmpty()) {
				return false;
			}else {
				return true;
			}
		}else {
			//returns false if user does not have an order details
			return false;
		}
	}
	
	//
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
