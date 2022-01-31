package com.team6.ecommercebackend;

import java.time.LocalDate;
import java.util.Optional;
import java.util.Set;
import javax.transaction.Transactional;
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
	
	//USER TEST
	@Test
	public void testAddUser() {
		LocalDate date = LocalDate.now();
		User user  = new User("test@email.com", "testpass", "Mr", "fname", "lname", date, "1234567899", "address", false);
		userRepo.save(user);
	}
	
	@Test
	public void testReadUser() {
		User user = userRepo.findById(4L).get();
		System.out.println(user.toString());
	}
	
	@Test
	public void testUpdateUser() {
		LocalDate date = LocalDate.now();
		User user  = new User(4L, "update@email.com", "testpass", "Mr", "fname", "lname", date, "1234567899", "address", false);
		userRepo.save(user);
	}
	
	@Test
	public void testDeleteUser() {
		userRepo.deleteById(4L);
	}

	
	//PRODUCT TEST
	@Test
	public void testAddProduct() {
		Products product  = new Products("TestType", "TestName", "TestDescription", 100.00);
		productRepo.save(product);
	}
	
	@Test
	public void testReadProduct() {
		Products product = productRepo.findById(4L).get();
		System.out.println(product.toString());
	}
	
	@Test
	public void testUpdateProduct() {
		Products product  = productRepo.findById(4L).get();
		product.setProdPrice(5000.00);
		productRepo.save(product);
	}
	
	@Test
	public void testDeleteProduct() {
		productRepo.deleteById(4L);
	}
	
	//ORDER DETAILS TEST
	//For when you are creating an order along with order details
	//Note cannot create a user along with creating the order details
	//Must retrieve user from database
	@Test
	public void testAddOrderDetails() {

		OrderDetails od = new OrderDetails();
		User user  = userRepo.findById(3L).get();
		user.setOrderDetails(od);
		od.setUser(user);
		od.setTotalPrice(1234.00);
		Orders e = new Orders();
		e.setProducts(productRepo.findById(3L).get());
		e.setQuantity(6);

		od.addOrder(e);
		orderDetailsRepo.save(od);
	}
	
	
	//Add @Transactional if you are using lazy loading
	@Test
	@Transactional
	public void testReadOrderDetails() {
		Optional<OrderDetails> od = orderDetailsRepo.findById(3L);
		System.out.println("OrderDetails Id: "+od.get().getId());
		System.out.println("OrderDetails User: "+od.get().getUser().toString());
		System.out.println("OrderDetails total price: "+od.get().getTotalPrice());
		System.out.println(od.get().getOrdersList());
		Set<Orders> oList= od.get().getOrdersList();
		for(Orders o: oList) {
			System.out.println(o.toString());;
		}

	}
	
	@Test
	public void testUpdateOrderDetails() {
		OrderDetails od = orderDetailsRepo.findById(3L).get();
		od.setTotalPrice(5000.00);
		
		Set<Orders> oList= od.getOrdersList();
		for(Orders o: oList) {
			o.setQuantity(100);
		}
		
		orderDetailsRepo.save(od);

	}
	
	//NEED TO WORK ON IT
	@Test
	public void testDeleteOrderDetails() {	
//		orderRepo.deleteById(5L);
//		System.out.println(orderDetailsRepo.findById(3L).get().toString());
		Optional<OrderDetails> od = orderDetailsRepo.findById(3L);
		orderDetailsRepo.delete(od.get());

	}
	
	//ORDERS TEST -- NO CASCADING CANNOT CREATE A ORDER DETAILS OR PRODUCT WHISLT CREATING AN ORDER
	@Test
	public void testAddOrder() {
		Orders order  = new Orders();
		OrderDetails orderDetails = orderDetailsRepo.findById(2L).get();
		order.setOrderDetails(orderDetails);
		Products products = productRepo.findById(3L).get();
		order.setProducts(products);
		order.setQuantity(4);
		orderRepo.save(order);
	}
	
	@Test
	public void testReadOrder() {
		System.out.println(orderRepo.findById(5l).get().toString());
	}
	
	
	@Test
	public void testUpdateOrder() {
		Optional<Orders> order  = orderRepo.findById(4L);
		order.get().setQuantity(100);
		orderRepo.save(order.get());
	}

	//NEED TO WORK ON IT
	@Test
	public void testDeleteOrder() {
		Orders entity = orderRepo.findById(5L).get();
		orderRepo.delete(entity);
	}
	
	


}
