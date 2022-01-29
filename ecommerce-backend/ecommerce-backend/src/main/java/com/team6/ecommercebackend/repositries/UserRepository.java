package com.team6.ecommercebackend.repositries;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.team6.ecommercebackend.entities.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{

}
