package com.team6.ecommercebackend.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="products")
public class Products {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_id")
	private Integer id;
	
	@Column(name = "product_type")
	private Integer prodType;
	
	@Column(name = "product_name")
	private Integer prodName;
	
	@Column(name = "product_description")
	private Integer prodDescription;
	
	@Column(name = "product_price")
	private Integer prodPrice;
}
