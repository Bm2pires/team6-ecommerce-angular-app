package com.ecommerce.spring.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Data;

@Entity
@Data
public class OrderItems {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="order_items_id")
	private long orderItemsID;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	private OrderDetails orderDetails;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "product_id", referencedColumnName = "productid")
	private Products products;
	
	
	@Column(name = "quantity", nullable = false)
	private int quantity;


	public OrderItems(long orderItemsID, OrderDetails orderDetails, Products products, int quantity) {
		super();
		this.orderItemsID = orderItemsID;
		this.orderDetails = orderDetails;
		this.products = products;
		this.quantity = quantity;
	}


	public OrderItems() {
		super();
	}

	
	
}
