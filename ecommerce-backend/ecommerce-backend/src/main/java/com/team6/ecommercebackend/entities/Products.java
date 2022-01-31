package com.team6.ecommercebackend.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="products")
public class Products {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_id", nullable=false)
	private long id;
	
	@Column(name = "product_type", nullable=false)
	private String prodType;
	
	@Column(name = "product_name", nullable=false)
	private String prodName;
	
	@Column(name = "product_description", nullable=false)
	private String prodDescription;
	
	@Column(name = "product_price", nullable=false)
	private Double prodPrice;
	
	//has a One to One relationship with orders
//	@OneToOne(mappedBy="products", cascade=CascadeType.ALL, fetch=FetchType.EAGER, orphanRemoval=true)
	@OneToOne(mappedBy="products", cascade=CascadeType.ALL, fetch=FetchType.LAZY, orphanRemoval=true)
	private Orders orders;
	
	public Products() {
		super();
	}


	public Products(String prodType, String prodName, String prodDescription, Double prodPrice) {
		super();
		this.prodType = prodType;
		this.prodName = prodName;
		this.prodDescription = prodDescription;
		this.prodPrice = prodPrice;
	}
	
	


	public Products(long id, String prodType, String prodName, String prodDescription, Double prodPrice) {
		super();
		this.id = id;
		this.prodType = prodType;
		this.prodName = prodName;
		this.prodDescription = prodDescription;
		this.prodPrice = prodPrice;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getProdType() {
		return prodType;
	}


	public void setProdType(String prodType) {
		this.prodType = prodType;
	}


	public String getProdName() {
		return prodName;
	}


	public void setProdName(String prodName) {
		this.prodName = prodName;
	}


	public String getProdDescription() {
		return prodDescription;
	}


	public void setProdDescription(String prodDescription) {
		this.prodDescription = prodDescription;
	}


	public Double getProdPrice() {
		return prodPrice;
	}


	public void setProdPrice(Double prodPrice) {
		this.prodPrice = prodPrice;
	}


	
	public Orders getOrders() {
		return orders;
	}


	public void setOrders(Orders orders) {
		this.orders = orders;
	}

	@Override
	public String toString() {
		return "Products [id=" + id + ", prodType=" + prodType + ", prodName=" + prodName + ", prodDescription="
				+ prodDescription + ", prodPrice=" + prodPrice + "]";
	}
	
}
