package com.ecommerce.spring.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.spring.entities.Brand;

public interface BrandRepository extends JpaRepository<Brand, Long> {
	public Optional<Brand> findByBrandName(String brand);

}
