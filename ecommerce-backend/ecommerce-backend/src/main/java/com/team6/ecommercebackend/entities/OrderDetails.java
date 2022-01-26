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
	
	@Column(name = "user_id", nullable=false)
	private Integer userId;
	
	@Column(name = "total_price", nullable=false)
	private double totalPrice;

	public OrderDetails() {
		super();
	}

	public OrderDetails(Integer id, Integer userId, double totalPrice) {
		super();
		this.id = id;
		this.userId = userId;
		this.totalPrice = totalPrice;
	}

	public OrderDetails(Integer userId, double totalPrice) {
		super();
		this.userId = userId;
		this.totalPrice = totalPrice;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	@Override
	public String toString() {
		return "OrderDetails [id=" + id + ", userId=" + userId + ", totalPrice=" + totalPrice + "]";
	}
	
	
}
