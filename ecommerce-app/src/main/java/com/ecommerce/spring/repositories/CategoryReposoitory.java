package com.ecommerce.spring.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.spring.entities.Categories;

public interface CategoryReposoitory extends JpaRepository<Categories, Long> {
	public Optional<Categories> findByCategoryName(String category);

}
