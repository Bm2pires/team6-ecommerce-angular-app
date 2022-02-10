# SQL statements to create tables in psql

## Create database

```sql
    CREATE DATABASE ecommerce;
```

Quite frankly, Spring hibernate generates all the tables.

## Insert table

```sql
INSERT INTO users (firstname, lastname, dob, phone_number, password, address, email_address, isAdmin, title) VALUES ('Bob', 'Ross', '1999-01-31', 1234567891, 'asdf', '1 Crown Street', 'user@hotmail.com', false, 'Mr'),
('Bob', 'Ross', '1999-01-31', 1234567891, 'pass@Word', '1 Crown Street', 'admin@hotmail.com', true, 'Mr');

INSERT INTO order_details(billing_address, date_of_order, shipping_address, total_price, user_id) VALUES ('40 Crossway Lane', '2021-07-12', '40 Crossway Lane', 400.76, 1)

INSERT INTO categories(category_name) VALUES ('Laptop'), ('Tablet'), ('Phone');

INSERT INTO brand(brand_name) VALUES ('Dell'), ('HP'), ('Samsung');

INSERT INTO products(image_url, product_desc, product_name, product_price, brand_brand_id, categories_categoryid) VALUES ('..\assets\images\product-images\dell-laptop.jfif', 'Dell Laptop', 'Dell Laptop', '450.00', 1, 1),
('..\assets\images\product-images\hp-laptop.jfif', 'HP Spectre', 'HP Laptop', '850.00', 2, 1),
('..\assets\images\product-images\hp-laptop.jfif', 'HP Series', 'HP Tablet', '123.00', 2, 2),
('..\assets\images\product-images\dell-laptop.jfif', 'Dell Series', 'Dell Tablet', '123.00', 1, 2),
('..\assets\images\product-images\dell-laptop.jfif', 'Samsung Galaxy S20', 'Brand new Samsung Galaxy S20', '750.00', 3, 3);

INSERT INTO order_items (quantity, order_details_order_detailsid, product_id) VALUES (5, 1, 1), (6, 1, 2);
```
