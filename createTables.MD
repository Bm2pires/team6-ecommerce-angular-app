# SQL statements to create tables in psql

## Create database

```sql
    CREATE DATABASE ecommerce;
```

## Create table

```sql
CREATE TABLE users (
	firstname VARCHAR(20),
	lastname VARCHAR(20),
	dob date,
	phone_number VARCHAR(10),
	password VARCHAR(20),
	address VARCHAR(150),
	email_address VARCHAR(50),
	isAdmin boolean
)
```

## Insert table

```sql
INSERT INTO users (firstname, lastname, dob, phone_number, password, address, email_address, isAdmin) VALUES ('Bob', 'Ross', '1999-01-31', 1234567891, 'asdf', '1 Crown Street', 'bobross@gmail.com', false)
```