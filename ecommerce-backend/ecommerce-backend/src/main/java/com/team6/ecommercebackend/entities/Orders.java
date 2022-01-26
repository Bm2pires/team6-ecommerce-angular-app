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
	
	@Column(name = "order_details_id", nullable=false)
	private Integer orderDetailsId;
	
	@Column(name = "product_id", nullable=false)
	private Integer productId;
	
	@Column(name = "quantity", nullable=false)
	private Integer quantity;

	public Orders() {
		super();
	}

	public Orders(Integer id, Integer orderDetailsId, Integer productId, Integer quantity) {
		super();
		this.id = id;
		this.orderDetailsId = orderDetailsId;
		this.productId = productId;
		this.quantity = quantity;
	}

	public Orders(Integer orderDetailsId, Integer productId, Integer quantity) {
		super();
		this.orderDetailsId = orderDetailsId;
		this.productId = productId;
		this.quantity = quantity;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getOrderDetailsId() {
		return orderDetailsId;
	}

	public void setOrderDetailsId(Integer orderDetailsId) {
		this.orderDetailsId = orderDetailsId;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "Orders [id=" + id + ", orderDetailsId=" + orderDetailsId + ", productId=" + productId + ", quantity="
				+ quantity + "]";
	}
	
	
}
