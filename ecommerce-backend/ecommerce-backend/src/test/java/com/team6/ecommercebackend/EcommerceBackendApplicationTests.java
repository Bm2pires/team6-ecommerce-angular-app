package com.team6.ecommercebackend;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.team6.ecommercebackend.entities.OrderDetails;
import com.team6.ecommercebackend.entities.Orders;
import com.team6.ecommercebackend.entities.Products;
import com.team6.ecommercebackend.entities.User;
import com.team6.ecommercebackend.repositries.OrderDetailsRepository;
import com.team6.ecommercebackend.repositries.OrdersRepository;
import com.team6.ecommercebackend.repositries.ProductsRepository;
import com.team6.ecommercebackend.repositries.UserRepository;

@SpringBootTest
class EcommerceBackendApplicationTests {
	
	@Autowired
	UserRepository userRepo;
	@Autowired
	OrderDetailsRepository orderDetailsRepo;
	@Autowired
	OrdersRepository orderRepo;
	@Autowired
	ProductsRepository productRepo;

	@Test
	void contextLoads() {
	}
	
	@Test
	public void testAddUser() {
		LocalDate date = LocalDate.now();
		User user  = new User("test@email.com", "testpass", "Mr", "fname", "lname", date, "1234567899", "address", false);
		userRepo.save(user);
	}
	
	
	@Test
	public void testAddOrderDetails() {
		OrderDetails od = new OrderDetails();
		
		Orders o1 = new Orders();
		Products p1 = new Products();
		p1.setProdDescription("prodDescTesting");
		p1.setProdName("test anme");
		p1.setProdPrice(100.00);
		p1.setProdType("Prod test type");
		
		o1.setProducts(p1);
		o1.setQuantity(6);

		
		Orders o2 = new Orders();

		o2.setProducts(p1);
		o2.setQuantity(9);

		
		od.addOrder(o1);
		od.addOrder(o2);
		
		od.setTotalPrice(100.00);
		User user = new User();
		user.setAddress("20A Vulcan Road");
		user.setAdmin(false);
		LocalDate date = LocalDate.now();
		user.setDob(date);
		user.setEmail("testemail@hotmail.com");
		user.setFirstName("testfname");
		user.setLastName("testlname");
		user.setPassword("testPass");
		user.setPhoneNumber("1234567899");
		user.setTitle("Mr");
		od.setUser(user);
		
		orderDetailsRepo.save(od);
	
	}
	
	//Add @Transactional if you are using lazy loading
	@Test
	public void testLoadOrderDetails() {
		Optional<OrderDetails> od = orderDetailsRepo.findById(15L);
		System.out.println("OrderDetails Id: "+od.get().getId());
		System.out.println("OrderDetails User: "+od.get().getUser().toString());
		System.out.println("OrderDetails total price: "+od.get().getTotalPrice());
		System.out.println(od.get().getOrdersListOD());
		List<Orders> oList= od.get().getOrdersListOD();
		for(Orders o: oList) {
			System.out.println(o.toString());;
		}

	}
	
	@Test
	public void testUpdateOrderDetails() {
		Optional<OrderDetails> od = orderDetailsRepo.findById(11L);
		od.get().setTotalPrice(5000.00);
		
		List<Orders> oList= od.get().getOrdersListOD();
		for(Orders o: oList) {
			o.setQuantity(100);
		}
		
		orderDetailsRepo.save(od.get());

	}
	
	@Test
	public void testDeleteOrderDetails() {
		orderDetailsRepo.deleteById(11L);;;

	}

}
