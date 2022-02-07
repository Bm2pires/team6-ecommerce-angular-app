package com.ecommerce.spring.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.ecommerce.spring.entities.Categories;
import com.ecommerce.spring.entities.User;

public interface CategoryReposoitory extends CrudRepository<Categories, Long>{
	public 	Optional<Categories> findByCategoryName(String category);

}
