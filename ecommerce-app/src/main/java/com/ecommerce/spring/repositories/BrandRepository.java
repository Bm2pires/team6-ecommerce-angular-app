package com.ecommerce.spring.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.ecommerce.spring.entities.Brand;
import com.ecommerce.spring.entities.Categories;

public interface BrandRepository extends CrudRepository<Brand, Long>{
	public 	Optional<Brand> findByBrandName(String brand);

}
