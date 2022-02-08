package com.ecommerce.spring.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.spring.entities.Products;

public interface ProductRepository extends JpaRepository<Products, Long> {
	public Optional<Products> findByProductName(String name);

	public Optional<Products> findByProductDescription(String description);

	public Optional<List<Products>> findByBrandBrandNameAndCategoriesCategoryName(String brand, String categories);
}
