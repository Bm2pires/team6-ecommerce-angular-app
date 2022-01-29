package com.team6.ecommercebackend.repositries;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.team6.ecommercebackend.entities.Orders;

@Repository
public interface OrdersRepository extends CrudRepository<Orders, Long>{

}
