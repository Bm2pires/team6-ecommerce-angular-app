package com.team6.ecommercebackend.repositries;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.team6.ecommercebackend.entities.Products;

@Repository
public interface ProductsRepository extends CrudRepository<Products, Long>{

}
