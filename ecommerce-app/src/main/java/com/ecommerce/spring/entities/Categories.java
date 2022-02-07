package com.ecommerce.spring.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;

@Entity
@Data
public class Categories {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long categoryid;

	private String categoryName;
	
	@OneToMany(mappedBy = "categories", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Products> products = new ArrayList<>();

	public Categories(long categoryid, String categoryName, List<Products> products) {
		super();
		this.categoryid = categoryid;
		this.categoryName = categoryName;
		this.products = products;
	}

	public Categories(String categoryName, List<Products> products) {
		super();
		this.categoryName = categoryName;
		this.products = products;
	}

	public Categories() {
		super();
	}
	
	
} 
