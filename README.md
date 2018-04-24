# Bangazon Corp -- Site

## Getting Started
### Install
To initialize the database: 
+ Load PostGreSQL
+ Open PostGreSQL in your terminal; `psql` || your set alias
+ Create the appropriate database locally with the following command:
```
<username>=# CREATE DATABASE bangazon_site;
```
+ Connect to the database
```
<username>=# \c bangazon_site;
```
+ In a seperate window, outside the `psql` shell, initialize sequelize in the root directory
```
$ sequelize init
```
+ In the created `./config/config.json`, from the first object: 
    + remove `username` and `password` 
    + change `database` value to `bangazon_site`
    + change `dialect` value to `postgres`

#### Home
Displays the 20 latest products in the Bangazon warehouse!

#### Login / Register

#### Categories
+ `http://localhost:8080/categories`: all product types are rendered to DOM in individual cards with only 3 products listed (if product type has 3 or more products)
+ `http://localhost:8080/categories/<product_type_id>`: 
    + Redirected when user clicks on any product card 
    + Renders all products for specified `product_type_id`
    + Anchor tags for each product title redirects page to further product info (`http://localhost:8080/products/<product_id>`) 

#### Prodcuts
+ In the browser, proceeding to ```http://localhost:8080/products/:id```, where :id is an integer, will display a products detail page for an individual product.
#### Account
+ In the browser, proceeding to ```http://localhost:8080/account```, after being logged in, will display users' payment types.  User can add or delete their payment types on this page.

#### Inventory `/inventory/`
Leads to the current user's inventory of products they are selling.  Can only be accessed by a logged in user.

#### Cart

