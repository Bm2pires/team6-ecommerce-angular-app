# SQL statements to create tables in psql

## Create database

```sql
    CREATE DATABASE ecommerce;
```

Quite frankly, Spring hibernate generates all the tables.

## Insert table

```sql
INSERT INTO users (firstname, lastname, dob, phone_number, password, address, email_address, isAdmin, title) VALUES ('Bob', 'Ross', '1999-01-31', 1234567891, 'asdf', '1 Crown Street', 'bobross@gmail.com', false, 'Mr')

INSERT INTO products(image_url, product_desc, product_name, product_price, brand_brand_id, categories_categoryid) VALUES ('', 'Dell Laptop', 'Dell Laptop', '450.00', 1, 1)

INSERT INTO products(image_url, product_desc, product_name, product_price, brand_brand_id, categories_categoryid) VALUES ('', 'HP Spectre', 'HP Laptop', '850.00', 2, 1)

INSERT INTO products(image_url, product_desc, product_name, product_price, brand_brand_id, categories_categoryid) VALUES ('', 'HP Envy', 'HP Laptop 2022', '750.00', 2, 1)

INSERT INTO categories(category_name) VALUES ('Laptop')

INSERT INTO brand(brand_name) VALUES ('Dell')

INSERT INTO brand(brand_name) VALUES ('HP')
```