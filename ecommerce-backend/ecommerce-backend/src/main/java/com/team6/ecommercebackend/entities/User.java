package com.team6.ecommercebackend.entities;

import java.time.LocalDate;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id", nullable=false)
	private long id;
	
	@Column(name = "email_address", length = 50, nullable=false)
	private String email;
	
	@Column(name = "password", length = 20, nullable=false)
	private String password;
	
	@Column(name = "title", length = 5, nullable=false)
	private String title;
	
	@Column(name = "firstname", length = 20, nullable=false)
	private String firstName;
	
	@Column(name = "lastname", length = 20, nullable=false)
	private String lastName;
	
	@Column(name = "dob", nullable=false)
	private LocalDate dob;
	
	@Column(name = "phone_number", length = 10, nullable=false)
	private String phoneNumber;
	
	@Column(name = "address", length = 150, nullable=false)
	private String address;
	
	@Column(name = "isadmin", nullable=false)
	private boolean isAdmin;

//	Has a One to one relationship with orderdetails 
	@OneToOne(mappedBy="user", cascade=CascadeType.ALL, fetch=FetchType.EAGER, orphanRemoval=true)
	private OrderDetails orderDetails;
	
	public User() {
		super();
	}

	public User(String email, String password, String title, String firstName, String lastName, LocalDate dob,
			String phoneNumber, String address, boolean isAdmin) {
		super();
		this.email = email;
		this.password = password;
		this.title = title;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = dob;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.isAdmin = isAdmin;
	}
	
	

	public User(long id, String email, String password, String title, String firstName, String lastName, LocalDate dob,
			String phoneNumber, String address, boolean isAdmin) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.title = title;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = dob;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.isAdmin = isAdmin;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public boolean isAdmin() {
		return isAdmin;
	}

	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	public OrderDetails getOrderDetails() {
		return orderDetails;
	}

	public void setOrderDetails(OrderDetails orderDetails) {
		this.orderDetails = orderDetails;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + ", password=" + password + ", title=" + title + ", firstName="
				+ firstName + ", lastName=" + lastName + ", dob=" + dob + ", phoneNumber=" + phoneNumber + ", address="
				+ address + ", isAdmin=" + isAdmin + "]";
	}
	
	

	

	
	
	
	
}
