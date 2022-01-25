package com.team6.ecommercebackend.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="orders")
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "orders_id")
	private Integer id;
	
	@Column(name = "order_details_id")
	private Integer orderDetailsId;
	
	@Column(name = "product_id")
	private Integer productId;
	
	@Column(name = "quantity")
	private Integer quantity;
}
