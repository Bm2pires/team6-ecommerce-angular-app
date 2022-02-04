package com.ecommerce.spring.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Brand {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Integer brandId;

	private String brandName;
}
