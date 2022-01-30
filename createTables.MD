# SQL statements to create tables in psql

## Create database

```sql
    CREATE DATABASE ecommerce;
```

## Create table

### Users table

```sql
CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	email_address VARCHAR(50) NOT NULL,
	password VARCHAR(20) NOT NULL,
	title VARCHAR(5) NOT NULL,
	firstname VARCHAR(20) NOT NULL,
	lastname VARCHAR(20) NOT NULL,
	dob date NOT NULL,
	phone_number VARCHAR(10) NOT NULL,
	address VARCHAR(150) NOT NULL,
	isadmin boolean NOT NULL
)
```

### Order Details table

```sql
CREATE TABLE order_details (
	order_details_id SERIAL PRIMARY KEY NOT NULL,
	user_id INT REFERENCES users(user_id) NOT NULL,
	total_price FLOAT NOT NULL,
	-- CONSTRAINT fk_order_details_users
	-- 	FOREIGN KEY (userid)
	-- 		REFERENCES users(userid)
)
```

### Orders

```sql
CREATE TABLE orders (
	orders_id SERIAL PRIMARY KEY NOT NULL,
	order_details_id INT REFERENCES order_details(order_details_id) NOT NULL ON DELETE CASCADE,
	product_id INT REFERENCES products(product_id) NOT NULL,
	quantity INT NOT NULL
)
```

### Products

```sql
CREATE TABLE products (
	product_id SERIAL PRIMARY KEY NOT NULL,
	product_type VARCHAR(20) NOT NULL,
	product_name VARCHAR(50) NOT NULL,
	product_description VARCHAR(200),
	product_price FLOAT NOT NULL
)
```

## Insert table

```sql
INSERT INTO users (firstname, lastname, dob, phone_number, password, address, email_address, isAdmin) VALUES ('Bob', 'Ross', '1999-01-31', 1234567891, 'asdf', '1 Crown Street', 'bobross@gmail.com', false)
```
