package com.team6.ecommercebackend.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="order_details")
public class OrderDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "order_details_id")
	private Integer id;
	
	@Column(name = "user_id")
	private Integer userId;
	
	@Column(name = "total_price")
	private double totalPrice;
}
