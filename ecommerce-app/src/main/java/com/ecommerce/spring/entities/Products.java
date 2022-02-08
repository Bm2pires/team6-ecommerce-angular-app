package com.ecommerce.spring.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class Products {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long productId;

	@Column(name = "product_name", length = 50, nullable = false, unique = true)
	private String productName;

	@Column(name = "product_desc", length = 250, unique = true)
	private String productDescription;

	@Column(name = "product_price", nullable = false)
	private String productPrice;

	@Column(name = "image_url", nullable = false)
	private String imageUrl;

	@ManyToOne(fetch = FetchType.LAZY)
	private Categories categories;

	@ManyToOne(fetch = FetchType.LAZY)
	private Brand brand;

	// old constructor without imageUrl
//	public Products(long productId, String productName, String productDescription, String productPrice,
//			Categories categories, Brand brand) {
//		super();
//		this.productId = productId;
//		this.productName = productName;
//		this.productDescription = productDescription;
//		this.productPrice = productPrice;
//		this.categories = categories;
//		this.brand = brand;
//	}

	// new updated constructor
	public Products(long productId, String productName, String productDescription, String productPrice, String imageUrl,
			Categories categories, Brand brand) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productDescription = productDescription;
		this.productPrice = productPrice;
		this.imageUrl = imageUrl;
		this.categories = categories;
		this.brand = brand;
	}

	// old constructor without imageUrl
//	public Products(String productName, String productDescription, String productPrice, Categories categories,
//			Brand brand) {
//		super();
//		this.productName = productName;
//		this.productDescription = productDescription;
//		this.productPrice = productPrice;
//		this.categories = categories;
//		this.brand = brand;
//	}

	// new updated constructor
	public Products(String productName, String productDescription, String productPrice, String imageUrl,
			Categories categories, Brand brand) {
		super();
		this.productName = productName;
		this.productDescription = productDescription;
		this.productPrice = productPrice;
		this.imageUrl = imageUrl;
		this.categories = categories;
		this.brand = brand;
	}

	public Products() {
		super();
	}

}
