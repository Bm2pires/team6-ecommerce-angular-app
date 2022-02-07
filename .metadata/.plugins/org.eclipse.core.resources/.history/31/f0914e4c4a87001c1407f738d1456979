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
public class Brand {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long brandid;

	private String brandName;
	
	
    @OneToMany(
            mappedBy = "brand",
            cascade = CascadeType.ALL,
            orphanRemoval = true
        )
        private List<Products> products = new ArrayList<>();


	public Brand(long brandid, String brandName, List<Products> products) {
		super();
		this.brandid = brandid;
		this.brandName = brandName;
		this.products = products;
	}


	public Brand(String brandName, List<Products> products) {
		super();
		this.brandName = brandName;
		this.products = products;
	}


	public Brand() {
		super();
	}
    
    
}
