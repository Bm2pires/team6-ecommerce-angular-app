package com.team6.ecommercebackend.entities;

import java.util.HashSet;
import java.util.Set;
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
	@Column(name = "order_details_id", nullable=false)
	private long id;
	
	@Column(name = "total_price", nullable=false)
	private double totalPrice;
	
	//Has a One to one relationship with user 
	@OneToOne
	@JoinColumn(name="user_id")
	private User user;
		
	//has a one to many relationship with orders
//	@OneToMany(mappedBy="orderDetails", cascade=CascadeType.ALL, fetch=FetchType.EAGER, orphanRemoval = true)
	@OneToMany(mappedBy="orderDetails", cascade=CascadeType.ALL, fetch=FetchType.EAGER, orphanRemoval = false)
	Set<Orders> ordersList;
	
	public OrderDetails() {
		super();
	}

	public OrderDetails(double totalPrice, User user, Set<Orders> ordersListOD) {
		super();
		this.totalPrice = totalPrice;
		this.user = user;
		this.ordersList = ordersListOD;
	}
	
	public OrderDetails(double totalPrice, User user) {
		super();
		this.totalPrice = totalPrice;
		this.user = user;
	}

	public OrderDetails(long id, double totalPrice, User user, Set<Orders> ordersListOD) {
		super();
		this.id = id;
		this.totalPrice = totalPrice;
		this.user = user;
		this.ordersList = ordersListOD;
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

	public Set<Orders> getOrdersList() {
		return ordersList;
	}

	public void setOrdersList(Set<Orders> ordersList) {
		this.ordersList = ordersList;
        this.ordersList.forEach(order -> order.setParent(this));

	}

	@Override
	public String toString() {
		return "OrderDetails [id=" + id + ", totalPrice=" + totalPrice + "]";
	}

	public void addOrder(Orders order) {
		if(order != null) {
			if(ordersList == null) {
				ordersList = new HashSet<>();
			}
			order.setOrderDetails(this);
			ordersList.add(order);
			
		}
	}
	
	
	

	

	


	
	

	

	
	
}
