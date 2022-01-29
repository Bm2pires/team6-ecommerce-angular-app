package com.team6.ecommercebackend.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="orders")
public class Orders {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "orders_id")
	private Long id;
	
	//Has a many to one relationship with order details
	@ManyToOne
	@JoinColumn(name="order_details_id", nullable=false)
	OrderDetails orderDetails;
	 
	//Has a One to One relationship with products
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="product_id")
	private Products products;

	@Column(name = "quantity", nullable=false)
	private Integer quantity;


	public Orders() {
		super();
	}


	public Orders(OrderDetails orderDetails, Products products, Integer quantity) {
		super();
		this.orderDetails = orderDetails;
		this.products = products;
		this.quantity = quantity;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public OrderDetails getOrderDetails() {
		return orderDetails;
	}


	public void setOrderDetails(OrderDetails orderDetails) {
		this.orderDetails = orderDetails;
	}


	public Products getProducts() {
		return products;
	}


	public void setProducts(Products products) {
		this.products = products;
	}


	public Integer getQuantity() {
		return quantity;
	}


	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}


	@Override
	public String toString() {
		return "Orders [id=" + id + ", orderDetails=" + orderDetails + ", products=" + products + ", quantity="
				+ quantity + "]";
	}
	
	


	







	
	
	
	




	

	

	
	
}
