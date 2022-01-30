package com.team6.ecommercebackend.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name="order_details")
public class OrderDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "order_details_id",nullable=false)
	private long id;
	
	@Column(name = "total_price", nullable=false)
	private double totalPrice;
	
	//Has a One to one relationship with user 
	@OneToOne(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinColumn(name="user_id", nullable=false)
	private User user;

	//has a one to many relationship with orders
	@OneToMany(mappedBy="orderDetails", cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	List<Orders> ordersListOD;
	
	public OrderDetails() {
		super();
	}

	public OrderDetails(double totalPrice, User user, List<Orders> ordersListOD) {
		super();
		this.totalPrice = totalPrice;
		this.user = user;
		this.ordersListOD = ordersListOD;
	}

	public OrderDetails(long id, double totalPrice, User user, List<Orders> ordersListOD) {
		super();
		this.id = id;
		this.totalPrice = totalPrice;
		this.user = user;
		this.ordersListOD = ordersListOD;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Orders> getOrdersListOD() {
		return ordersListOD;
	}

	public void setOrdersListOD(List<Orders> ordersListOD) {
		this.ordersListOD = ordersListOD;
	}
	
	

	@Override
	public String toString() {
		return "OrderDetails [id=" + id + ", totalPrice=" + totalPrice + "]";
	}

	public void addOrder(Orders order) {
		if(order != null) {
			if(ordersListOD == null) {
				ordersListOD = new ArrayList<>();
			}
			order.setOrderDetails(this);
			ordersListOD.add(order);
			
		}
	}
	
	
	

	

	


	
	

	

	
	
}
