# SQL statements to create tables in psql

## Create database

```sql
    CREATE DATABASE ecommerce;
```

Quite frankly, Spring hibernate generates all the tables.

## Insert table

```sql
INSERT INTO users (firstname, lastname, dob, phone_number, password, address, email_address, isAdmin, title) VALUES ('Bob', 'Ross', '1999-01-31', 1234567891, 'asdf', '1 Crown Street', 'bobross@gmail.com', false, 'Mr')

INSERT INTO categories(category_name) VALUES ('Laptop');

INSERT INTO Categories(category_name) VALUES ('Tablet');

INSERT INTO brand(brand_name) VALUES ('Dell'), ('HP');

INSERT INTO products(image_url, product_desc, product_name, product_price, brand_brand_id, categories_categoryid) VALUES ('..\assets\images\product-images\dell-laptop.jfif', 'Dell Laptop', 'Dell Laptop', '450.00', 1, 1), ('..\assets\images\product-images\hp-laptop.jfif', 'HP Spectre', 'HP Laptop', '850.00', 2, 1),
('..\assets\images\product-images\hp-laptop.jfif', 'HP Envy', 'HP Laptop 2022', '750.00', 2, 1)
```